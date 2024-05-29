import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { socket } from "./socket";
import { AddUsername } from "./components/add-username";
import { GameArea } from "./components/game-area/game-area";
import { LoadingSpinner } from "./components/loading-spinner";

function App() {
  const [username, setUsername] = useState("");
  const [gameState, setGameState] = useState("none");
  const [error, setError] = useState();
  const [opponent, setOpponent] = useState();

  useEffect(() => {
    socket.on("playersConnected", createGamePeripherals);

    return () => {
      socket.off("playersConnected", createGamePeripherals);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const createGamePeripherals = ({ roomId, allPlayers }) => {
    setGameState("joined");
    const p1 = allPlayers.p1.username;
    const p2 = allPlayers.p2.username;

    if (p1 === username) setOpponent(p2);
    else setOpponent(p1);
  };

  const onAddUsername = () => {
    if (username !== "") {
      socket.emit("findPlayer", { username });
      setGameState("waiting");
    } else setError("Username is required to start the game");
  };

  const content = {
    none: (
      <S.Container>
        <AddUsername
          value={username}
          onChange={setUsername}
          onSubmit={onAddUsername}
          error={error}
        />
      </S.Container>
    ),
    waiting: (
      <S.Container>
        <AddUsername
          value={username}
          onChange={setUsername}
          onSubmit={onAddUsername}
          error={error}
        />
        <LoadingSpinner />
      </S.Container>
    ),
    joined: (
      <S.Container>
        <GameArea username={username} opponent={opponent} />
      </S.Container>
    ),
  };

  return content[gameState];
}

const S = {
  Container: styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default App;
