const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const { userExists, getUserByUsersName, createUser } = require('../db/usersDb')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName: getUserByUsersName,
  createUser,
})

module.exports = router