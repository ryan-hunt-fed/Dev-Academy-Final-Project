const express = require('express')
const router = express.Router()
const db = require('../db/db')


router.get('/saved/:userId', (req, res) => {
  const userId = req.params.userId
  db.getUserTeam(userId)
    .then((pokehumans) => {
      res.json(pokehumans)
    })
    .catch((err) => {
      console.log('Error in Server ' + err.message)
    })
})

router.post('/saved/:userId', (req, res) => {

  const userId = req.params.userId
  const postId = req.body.pokehumansId

  console.log();

  db.insertUsersTeam(userId, postId)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('Error in Server ' + err.message)
    })
})

module.exports = router