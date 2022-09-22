const conn = require('./connection')

// GET Functions

async function getAllPokesDb(db = conn) {
  return await db('pokehumans')
}

async function getDexEntryDb(id, db = conn) {
  return await db('pokehumans').select().where('id', id).first()
}

// INSERT Functions

async function insertPokeHumanDb(newData, db = conn) {
  return await db('pokehumans').insert(newData)
}


module.exports = {
  insertPokeHumanDb,
  getAllPokesDb,
  getDexEntryDb,
}
