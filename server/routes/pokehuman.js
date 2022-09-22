const express = require('express')
const router = express.Router()

const db = require('../db/db')

//snakes case to camel case
//ekans is snake
//numel is camel
function ekansToNumelPost(ekans) {
  let numelCasePost = {
    id: ekans.id,
    name: ekans.name,
    type1: ekans.type_1,
    type2: ekans.type_2,
    HP: ekans.HP,
    attack: ekans.attack,
    defence: ekans.defence,
    spAttack: ekans.Sp_attack,
    spDefence: ekans.Sp_defence,
    speed: ekans.speed,
    image: ekans.image
  }
  return numelCasePost
}

//GET '/api/v1/pokehumans'
router.get('/', async (req, res) => {
  try {
    const humans = await db.getAllPokesDb()
    const numel = humans.map(obj => ekansToNumelPost(obj))
    //console.log(numel)
    res.json(numel)
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

  await db.insertPokeHumanDb(data)
  return res
})

module.exports = router
