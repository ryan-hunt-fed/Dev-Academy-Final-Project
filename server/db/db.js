//code here
const conn = require('./connection')

//GET

function getAllPokesDb(db = conn) {
  return db('pokehumans').select()
}

function insertPokeHuman(newData, db = conn) {
  return db('pokehumans').insert(newData)
}

function getOnePokeHuman(id, db = conn) {
  return db('pokehumans').select().where('id', id).first()
}

async function getDexEntryDB(id, db = connection) {
  return await db('pokehumans').select().where('id', id).first()
}
async function getDexEntryDB(id, db = conn) {
  return await db('pokehumans').select().where('id', id).first()
}

module.exports = {
  insertPokeHuman,
  getOnePokeHuman,
  getAllPokesDb,
  getDexEntryDB,
}
