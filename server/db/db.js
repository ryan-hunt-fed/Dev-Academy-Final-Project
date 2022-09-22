const conn = require('./connection')

// GET Functions

async function getAllPokesDb(db = conn) {
  return await db('pokehumans')
}

async function getDexEntryDB(id, db = conn) {
  return await db('pokehumans').select().where('id', id).first()
}

module.exports = {
  getAllPokesDb,
  getDexEntryDB
}


