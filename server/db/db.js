const config = require('./knexfile').development
const connection = require('knex')(config)

function insertPokeHuman(newData, db = conn) {
  return db('pokehumans').insert(newData)
}

function getOnePokeHuman(id, db = conn) {
  return db('pokehumans').select().where('id', id).first()
}

async function getDexEntryDB(id, db = connection) {
    return await db('pokehumans').select().where('id', id).first()
  }

module.exports = {
  insertPokeHuman,
  getOnePokeHuman,
  getDexEntryDB
}





