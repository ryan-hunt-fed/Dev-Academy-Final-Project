const config = require('./knexfile').development
const connection = require('knex')(config)

async function getDexEntryDB(id, db = connection) {
  return await db('pokehumans').select().where('id', id).first()
}

module.exports = {
  getDexEntryDB
}