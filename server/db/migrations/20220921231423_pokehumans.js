/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('pokehumans', (table) => {
    table.increments('id')
    table.string('name')
    table.string('type_1')
    table.string('type_2')
    table.integer('HP')
    table.integer('attack')
    table.integer('defence')
    table.integer('Sp_attack')
    table.integer('Sp_defence')
    table.integer('speed')
    table.binary('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('pokehumans')
}
