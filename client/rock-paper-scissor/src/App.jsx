import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { useSocketContext } from "./socket";
import { AddUsername } from "./components/add-username";
import { GameArea } from "./components/game-area/game-area";
import { LoadingSpinner } from "./components/loading-spinner";

function App() {
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
      <S.Container>
        <AddUsername
          onAddUsername={onAddUsername}
          value={username}
          onChange={setUsername}
        />
      </S.Container>
    ),
    waiting: (
      <S.Container>
        <AddUsername
          value={username}
          onChange={setUsername}
          onAddUsername={onAddUsername}
        />
        <LoadingSpinner />
      </S.Container>
    ),
    joined: (
      <S.Container>
        <GameArea username={username} players={players} roomId={roomId} />
      </S.Container>
    ),
  };

  return content[gameState];
}

const S = {
  Container: styled.section`
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default App;
