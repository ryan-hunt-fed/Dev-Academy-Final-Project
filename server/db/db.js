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

// USER GET TEAM
function getUserTeam(userId, db = conn) {
  return db('teams')
    .select('*')
    .where('user_id', userId)
    .join('pokehumans', 'pokehumans.id', 'pokehumans_id')
}

// USER SAVING TEAM
async function insertUsersTeam(userId, pokehumansId, db = conn) {
  const data = { user_id: userId, pokehumans_id: pokehumansId }
  return await db('teams').select().insert(data)
}

// DEL USER SAVING TEAM
async function removeUserTeamDb(id, db = conn) {
  return await db('teams').del().where('id', id)
}
module.exports = {
  insertPokeHumanDb,
  getAllPokesDb,
  getDexEntryDb,
  getUserTeam,
  insertUsersTeam,
  removeUserTeamDb,
}
