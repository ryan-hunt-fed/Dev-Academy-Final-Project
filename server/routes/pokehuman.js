const express = require('express')
const router = express.Router()

const db = require('../db/db')


//GET '/api/v1/pokehumans'
router.get('/', async (req, res) => {
  try {
    const humans = await db.getAllPokesDb()
    res.json(humans)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

module.exports = router