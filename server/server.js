const express = require('express')
const path = require('path')
const pokehumansRoutes = require('./routes/pokehuman')

const server = express()


server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/pokehumans', pokehumansRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
