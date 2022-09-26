const conn = require('./connection')

async function getAllPokesDb(db = conn) {
  return await db('pokehumans')
}

async function getDexEntryDb(id, db = conn) {
  return await db('pokehumans').select().where('id', id).first()
}

async function insertPokeHumanDb(newData, db = conn) {
  return await db('pokehumans').insert(newData)
}

function getUserTeam(userId, db = conn) {
  return db('teams')
    .select()
    .where('user_id', userId)
    .join('pokehumans', 'pokehumans.id', 'pokehumans_id')
  
}

async function insertUsersTeam(userId, pokehumansId, db = conn) {
  const data = { user_id: userId, pokehumans_id: pokehumansId }
  return await db('teams').select().insert(data)
}

module.exports = {
  insertPokeHumanDb,
  getAllPokesDb,
  getDexEntryDb,
  getUserTeam,
  insertUsersTeam,
}
