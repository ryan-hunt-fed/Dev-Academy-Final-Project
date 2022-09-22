//code here
const conn = require('./connection')

//GET

function getAllPokesDb(db = conn) {
  return db('pokehumans').select()
}

async function getDexEntryDB(id, db = conn) {
  return await db('pokehumans').select().where('id', id).first()
}

module.exports = {
  getAllPokesDb,
  getDexEntryDB
}


