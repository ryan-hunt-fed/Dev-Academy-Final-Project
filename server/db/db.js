const conn = requre('./connection')

function insertPokeHuman(newData, db = con) {
  return db('pokehumans').insert(newData)
}
