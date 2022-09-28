const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.delete('/:id/remove', async (req, res) => {
  const id = req.params.id
  try {
    const removed = await db.removeUserTeamDb(id)

    res.json(removed)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
