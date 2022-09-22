const conn = requre('./connection')

function insertPokeHuman(newData, db = conn) {
  return db('pokehumans').insert(newData)
}

function getOnePokeHuman(id, db = conn) {
  return db('pokehumans').select().where('id', id).first()
}

module.exports = {
  insertPokeHuman,
  getOnePokeHuman,
}
