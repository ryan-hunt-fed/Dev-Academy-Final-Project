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

// USER SAVED TEAM
async function getUserTeam(userId, db = conn) {
  const userTeam = await db('teams')
    .select('pokehumans_id')
    .where('user_id', userId)
  return userTeam.map((x) => x.pokehumans_id)
}

// USER SAVING TEAM
async function insertUsersTeam(userId, pokehumansId, db = conn) {
  const data = { user_id: userId, pokehumans_id: pokehumansId }
  return await db('teams').select().insert(data)
}


module.exports = {
  insertPokeHumanDb,
  getAllPokesDb,
  getDexEntryDb,
  getUserTeam,
  insertUsersTeam
}
