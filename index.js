const express = require("express");

const app = express();

const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");

let players = [];

let availableRooms = [];

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get("/test", (req, res) => {
  res.send("RPS app running...");
});

io.on("connection", (socket) => {
  console.log("a client connected");

  socket.on("disconnect", () => {
    console.log("disconnected");
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
          points: 0,
          selection: null,
        };
        const p2 = {
          username: playersForGame[1],
          points: 0,
          selection: null,
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
      }
    } else {
      const newRoom = makeId(8);
      socket.join(newRoom);
      availableRooms.push(newRoom);
    }
  });
});

server.listen(4000, () => {
  console.log("listening on port 4000");
});

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
