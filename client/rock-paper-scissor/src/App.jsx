import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';
import { socket } from './socket';

function App() {
  const [joinedRoomId, setRoomId] = useState(null)
  const [inputRoomId, setInputRoomId] = useState()

  useEffect(() => {
    const onSocketConnected = () => {
      console.log('connected')
    }

    socket.on('connect', onSocketConnected)

    return () => {
      socket.off('connect', onSocketConnected)
    }
  }, [])

  useEffect(() => {
    socket.on("joinedRoom", onRoomJoined)

    socket.on("roomError", onRoomError)


    return () => {
      socket.off("joinedRoom", onRoomJoined)
      socket.off('roomError', onRoomError)
    }
  }, [])

  const onRoomError = ({message}) => {
    console.log('room joining error', message)
  }

  const onRoomJoined = ({roomId}) => {
    console.log('joined room', roomId)
    setRoomId(roomId)
  }

  const onCreateGame = () => {
    socket.emit("createGame")
  }

  const onJoinGame = () => {
    socket.emit("joinGame", {roomId: inputRoomId})
  }

  const onSubmit = (event) => {
    event.preventDefault()
    onJoinGame()
  }

  return (
    <div className="hello">
      {joinedRoomId && (
        <div className="joined">
          Joined Room Id {joinedRoomId}
        </div>
      )}
      <button className="createGame" onClick={onCreateGame}>
        Create Game
      </button>
      <form onSubmit={onSubmit}>
        <input type="text" required value={inputRoomId} onChange={(event) => {
          setInputRoomId(event.target.value)
        }} />
        <button type="submit" className="joinGame">
        Join Game
        </button>
      </form>

    </div>
  );
}

export default App;
