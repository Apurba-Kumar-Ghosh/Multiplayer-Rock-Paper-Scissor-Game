const express = require("express");

const app = express();

const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");

let players = [];

let availableRooms = [];

let roomsInUse = {};

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get("/test", (req, res) => {
  res.send("RPS app running...");
});

io.on("connection", (socket) => {
  //   console.log("a client connected");

  socket.on("disconnect", () => {
    // console.log("disconnected");
  });

  socket.on("findPlayer", ({ username }) => {
    players.push(username);

    if (players.length >= 2) {
      const playersForGame = players.splice(0, 2);
      const room = availableRooms.length > 0 ? availableRooms[0] : null;

      if (!room) {
        socket.emit("Error", {
          message: "Something went wrong, please try joining again",
        });
      } else {
        socket.join(room);

        const p1 = {
          username: playersForGame[0],
          choice: null,
        };
        const p2 = {
          username: playersForGame[1],
          choice: null,
        };
        const playersObj = {
          p1,
          p2,
        };
        socket.to(room).emit("playersConnected", {
          roomId: room,
          allPlayers: playersObj,
        });
        socket.emit("playersConnected", {
          roomId: room,
          allPlayers: playersObj,
        });
        availableRooms.shift();
        roomsInUse[room] = {
          players: playersObj,
        };
      }
    } else {
      const newRoom = makeId(8);
      socket.join(newRoom);
      availableRooms.push(newRoom);
    }
  });

  socket.on("p2Choice", ({ value, roomId }) => {
    socket.to(roomId).emit("playerChoice", { value, player: "p2" });
    roomsInUse[roomId].players.p2.choice = value;
    const playerObj = roomsInUse[roomId].players;

    if (playerObj.p1.choice !== null) {
      const winner = checkWinner({
        p1: playerObj.p1.choice,
        p2: playerObj.p2.choice,
      });
      console.log("winner", winner);
      declareWinner(winner, roomId);
    }
  });

  socket.on("p1Choice", ({ value, roomId }) => {
    socket.to(roomId).emit("playerChoice", { value, player: "p1" });
    roomsInUse[roomId].players.p1.choice = value;
    const playerObj = roomsInUse[roomId].players;

    if (playerObj.p2.choice !== null) {
      const winner = checkWinner({
        p1: playerObj.p1.choice,
        p2: playerObj.p2.choice,
      });
      console.log("winner", winner);
      declareWinner(winner, roomId);
    }
  });
});

server.listen(4000, () => {
  console.log("listening on port 4000");
});

function checkWinner({ p1, p2 }) {
  if (p1 === "scissor") {
    if (p2 === "rock") return "p2";
    else if (p2 === "paper") return "p1";
    else return "d";
  } else if (p1 === "rock") {
    if (p2 === "scissor") return "p1";
    else if (p2 === "paper") return "p2";
    else return "d";
  } else {
    if (p2 === "rock") return "p1";
    else if (p2 == "scissor") return "p2";
    else return "d";
  }
}

function declareWinner(winner, roomId) {
  io.sockets.to(roomId).emit("decision", { winner });
  roomsInUse[roomId].players.p1.choice = null;
  roomsInUse[roomId].players.p2.choice = null;
}

function makeId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
