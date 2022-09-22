const express = require('express')
const router = express.Router()

const db = require('../db/db')


router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const entry = await db.getDexEntryDb(id)
    return res.json(entry)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

module.exports = router