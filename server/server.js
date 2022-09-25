const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const pokehumansRoutes = require('./routes/pokehuman')
const getDexEntry = require('./routes/dexentry')
const userTeams = require('./routes/usersTeams')
const bodyParser = require('body-parser')

const server = express()

// server.use(express.json())
server.use(bodyParser.json({ limit: '50mb' }))

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/pokehumans', pokehumansRoutes)
server.use('/api/v1/dexentry', getDexEntry)
server.use('/api/v1/teams', userTeams)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
