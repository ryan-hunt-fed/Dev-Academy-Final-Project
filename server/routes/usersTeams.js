const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/saved/:userId', (req, res) => {
  const userId = req.params.userId
  //console.log(userId)
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
  const postId = req.body.pokeId

  db.insertUsersTeam(userId, postId)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('Error in Server ' + err.message)
    })
})

router.delete('/:id/remove', async (req, res) => {
  const id = req.params.id
  try {
    const removed = await db.removeUsersTeamDb(id)
    res.json(removed)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
