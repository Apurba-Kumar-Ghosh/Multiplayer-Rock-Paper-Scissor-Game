import React, {useEffect, useState} from 'react'
import './App.css';
import { socket } from './socket';

function App() {
  const [joinedRoomId, setRoomId] = useState(null)
  const [availableRooms, setAvailableRooms] = useState([])
  const [gameMode, setGameMode] = useState("Waiting")

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
    socket.on("availableRooms", onRoomsAvailable)

    return () => {
      socket.off('availableRooms')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onRoomsAvailable = ({rooms}) => {
    setAvailableRooms(rooms.filter(room => room !== joinedRoomId))
  }

  useEffect(() => {
    socket.on("createdGame", onRoomJoined)

    socket.on("roomError", onRoomError)

    socket.on("playersConnected", onStartGame)


    return () => {
      socket.off("createdGame", onRoomJoined)
      socket.off('roomError', onRoomError)
      socket.off('playersConnected', onStartGame)
    }
  }, [])

  const onStartGame = () => {
    setGameMode("playing")
  }

  const onRoomError = ({message}) => {
    console.error('room joining error', message)
  }

  const onRoomJoined = ({roomId}) => {
    setRoomId(roomId)
  }

  const onCreateGame = () => {
    socket.emit("createGame")
  }

  const onJoinGame = (roomId) => {
    socket.emit("joinGame", {roomId})
  }

  return (
    <div className="hello">
      {gameMode !== "playing" ? (<>
      {joinedRoomId && (
        <div className="joined">
          Joined Room Id {joinedRoomId}
        </div>
      )}
      <button className="createGame" onClick={onCreateGame}>
        Create Game
      </button>
      <div className="avaialableRooms">
        {availableRooms.map((room, index) => {
          return (
            <div>
              <div>
              {`${index}. ${room}`}
              </div>
              <button className="join" onClick={() => {onJoinGame(room)}}>
                Join
              </button>
            </div>
          )
        })}
      </div>
      </>
      ) : (
        <div className="gameArea">
          Game Started between two players
        </div>
      )}
    </div>
  );
}

export default App;
