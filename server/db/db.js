//code here
const conn = require('./connection')

//GET

function getAllPokesDb(db = conn) {
  return db('pokehumans').select()
}

module.exports = {
  getAllPokesDb
} 