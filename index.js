const express = require("express")

const app = express()

const http = require("http")

const server = http.createServer(app)

const {Server} = require("socket.io")

const rooms = []

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000"
    }
})


app.get('/test', (req, res) => {
    res.send("RPS app running...");
})

io.on('connection', (socket) => {
    console.log('a client connected')

    socket.on('disconnect', () => {
        console.log('disconnected')
    }) 

    socket.on('createGame', () => {
        const roomId = makeId(10)

        socket.join(roomId)
        rooms.push(roomId)
        socket.emit('joinedRoom', {roomId})
    })

    socket.on('joinGame', ({roomId}) => {
        console.log('server join game', roomId)

        if(rooms.includes(roomId)) {
            socket.join(roomId)
            socket.emit('joinedRoom', {roomId})
            console.log('room joined', roomId)
        } else {
            socket.emit("roomError", {message: "Room does not exist"})
        }
    })
})


server.listen(4000, () => {
    console.log('listening on port 4000')
})


function makeId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
