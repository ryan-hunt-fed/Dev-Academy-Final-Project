/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('teams').del()
  await knex('teams').insert([
    { id: 1, user_id: 1, pokehumans_id: 1 },
    { id: 2, user_id: 1, pokehumans_id: 2 },
  ])
}
