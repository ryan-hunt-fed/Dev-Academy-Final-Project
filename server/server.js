const express = require('express')
const path = require('path')

const getDexEntry = require('./routes/dexentry')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

server.use('/api/v1/dexentry', getDexEntry)

module.exports = server
