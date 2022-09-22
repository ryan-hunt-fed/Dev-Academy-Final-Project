const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const entry = await db.getDexEntryDB(id)
  return res.json(entry)
})

module.exports = router