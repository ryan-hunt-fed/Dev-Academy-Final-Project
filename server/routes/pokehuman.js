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

router.post('/', async (req, res) => {
  const {
    name,
    type_1,
    type_2,
    HP,
    attack,
    defence,
    Sp_attack,
    Sp_defence,
    speed,
    image,
  } = req.body
  const data = {
    name,
    type_1,
    type_2,
    HP,
    attack,
    defence,
    Sp_attack,
    Sp_defence,
    speed,
    image,
  }
  console.log(data)
  let idArr = await db.insertPokeHuman(data)
  const id = idArr[0]
  let onePokeHuman = await db.getOnePokeHuman(id)
  res.json(onePokeHuman)
})

module.exports = router
