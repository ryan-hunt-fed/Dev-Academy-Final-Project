const conn = require('./connection')
const { generateHash } = require('authenticare/server')

function createUser(user, db = conn) {
  const newUser = { ...user }
  return generateHash(newUser.password).then((passwordHash) => {
    newUser.hash = passwordHash
    delete newUser.password
    return db('users').insert(newUser)
  })
}

function userExists(username, db = conn) {
  return db('users')
    .where('username', username)
    .then((users) => users.length > 0)
}

function getUserByUsersName(username, db = conn) {
  return db('users').where('username', username).first()
}

module.exports = {
  createUser,
  userExists,
  getUserByUsersName
}