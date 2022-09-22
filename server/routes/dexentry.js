const express = require('express')
const router = express.Router()

const db = require('../db/db')

// GET '/api/v1/dexentry'
router.get('/max', async (req, res) => {
  try {
    const entry = await db.getMaxIdDb()
    return res.json(entry)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

router.get('/min', async (req, res) => {
  try {
    const entry = await db.getMinIdDb()
    return res.json(entry)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

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