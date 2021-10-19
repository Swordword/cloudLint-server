const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)

const { Server } = require('socket.io')

const io = new Server(server,{
  cors:{
    // origin:"http://localhost:8080",
    // methods: ["GET", "POST"]
  }
})

io.on('connection',(socket) =>{
  console.log('a project connected')
  // 连接时更新配置
  io.emit('refreshClientConfig',JSON.stringify({}))
  socket.on('updateServerConfig',(config)=>{
    console.log('server updateServerConfig');
    io.emit('refreshClientConfig',config)
  })
  io.on('disconnect',()=>{
    console.log('a project disconnected')
  })
})

server.listen(8000, () => {
  console.log('ESLint Server is running at http://localhost:8000')
})

