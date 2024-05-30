import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSocketContext } from "../socket";
import { AddUsername } from "./components/add-username";
import { GameArea } from "../game-area";
import { LoadingSpinner } from "../components/atoms/loading-spinner";
import { Leaderboard } from "./components/leaderboard";
import { AppHeader } from "../components/organisms/app-header";
import { Text } from "../components/atoms/text";
import { Colors } from "../utils/style-helpers/color-styles";

export const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [gameState, setGameState] = useState("none");
  const [players, setPlayers] = useState();
  const [roomId, setRoomId] = useState();
  const { socket } = useSocketContext();

  useEffect(() => {
    socket.on("playersConnected", createGamePeripherals);

    return () => {
      socket.off("playersConnected", createGamePeripherals);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  useEffect(() => {
    socket.on("leave", disconnectFromGame);
    socket.on("error", disconnectFromGame);
    socket.on("disconnect", leaveGame);
    socket.on("duplicateUsername", onDuplicateUsername);

    return () => {
      socket.off("leave", disconnectFromGame);
      socket.off("error", disconnectFromGame);
      socket.off("disconnect", leaveGame);
      socket.off("duplicateUsername", onDuplicateUsername);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDuplicateUsername = () => {
    disconnectFromGame({
      message:
        "This username is already taken. Please use a different username",
    });
  };

  const leaveGame = () => {
    disconnectFromGame({ message: DEFAULT_ERROR_MESSAGE });
  };

  const disconnectFromGame = ({ message }) => {
    console.log("error");
    alert(message);
    window.location.reload();
  };

  const createGamePeripherals = ({ roomId, allPlayers }) => {
    setGameState("joined");
    setRoomId(roomId);
    const p1 = allPlayers.p1.username;
    const p2 = allPlayers.p2.username;
    setPlayers({
      p1,
      p2,
    });
  };

  const onAddUsername = (value) => {
    socket.emit("findPlayer", { username: value });
    setGameState("waiting");
  };

  const content = {
    none: (
      <>
        <AddUsername
          gameState={gameState}
          onAddUsername={onAddUsername}
          value={username}
          onChange={setUsername}
        />
        <Leaderboard />
      </>
    ),
    waiting: (
      <>
        <AddUsername
          gameState={gameState}
          value={username}
          onChange={setUsername}
          onAddUsername={onAddUsername}
        />
        <Text
          textalign="center"
          size="large"
          color={Colors.primary}
          weight="mediumStrong"
        >
          Please wait while we find an opponent for you...
        </Text>
        <LoadingSpinner />
      </>
    ),
    joined: <GameArea username={username} players={players} roomId={roomId} />,
  };

  return (
    <S.Container>
      <AppHeader
        btnTitle={
          gameState === "waiting" || gameState === "joined"
            ? "Sign out"
            : undefined
        }
      />
      {content[gameState]}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

const DEFAULT_ERROR_MESSAGE = "Something went wrong. Please join new game.";
