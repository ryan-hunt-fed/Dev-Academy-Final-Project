const express = require('express')
const path = require('path')
const pokehumansRoutes = require('./routes/pokehuman')

const getDexEntry = require('./routes/dexentry')
const bodyParser = require('body-parser')

const server = express()

// server.use(express.json())
server.use(bodyParser.json({ limit: '50mb' }))
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/pokehumans', pokehumansRoutes)
server.use('/api/v1/dexentry', getDexEntry)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
