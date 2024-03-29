const app = require('express')()

const http = require('http').createServer(app)

app.get('/', (req, res) => {
   res.send("Node Server is running. Yay!!!!!")
})
http.listen(8080)

//Socket Logic
const socketio = require("socket.io")(http)

socketio.on("conecction",(userSocket)=>{
    userSocket.on("send_message",(data)=>{
        userSocket.broadcast.emit("reaceive_message",data)
    })
})

http.listen(8080)