/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pokehumans').del()
  await knex('pokehumans').insert([
    { id: 1, name: 'Trashykris', type_1: 'Poison', type_2: 'Fire', HP: 10, attack: 43, defence: 54, Sp_attack: 86, Sp_defence: 77, speed: 62, image: '/images/Trashykris.jpeg' },
    { id: 2, name: 'Pidming', type_1: 'Flying', type_2: 'Normal', HP: 10, attack: 60, defence: 60, Sp_attack: 60, Sp_defence: 60, speed: 89, image: '/images/Pidming.jpeg' },
    { id: 3, name: 'Ironryan', type_1: 'Steel', type_2: 'Electric', HP: 10, attack: 59, defence: 91, Sp_attack: 53, Sp_defence: 55, speed: 42, image: '/images/Ironryan.jpeg' },
    { id: 4, name: 'Jeffykin', type_1: 'Fairy', type_2: 'Flying', HP: 10, attack: 46, defence: 58, Sp_attack: 61, Sp_defence: 96, speed: 59, image: '/images/Jeffykin.jpeg' },
    { id: 5, name: 'Jordanian', type_1: 'Fighting', type_2: 'Fighting', HP: 10, attack: 98, defence: 30, Sp_attack: 64, Sp_defence: 46, speed: 72, image: '/images/Jordanian.jpeg' },
    { id: 6, name: 'Kataria', type_1: 'Fairy', type_2: 'Dragon', HP: 10, attack: 80, defence: 89, Sp_attack: 95, Sp_defence: 84, speed: 86, image: 'https://lastfm.freetls.fastly.net/i/u/770x0/cbc22ac98ea714ee60b07b0d9fd920e6.jpg' },
    { id: 7, name: 'Borterra', type_1: 'Grass', type_2: 'Ground', HP: 10, attack: 76, defence: 64, Sp_attack: 54, Sp_defence: 86, speed: 42, image: '/images/Bort.jpeg' },
    { id: 8, name: 'Paulo', type_1: 'Fire', type_2: 'Fighting', HP: 10, attack: 94, defence: 57, Sp_attack: 64, Sp_defence: 48, speed: 74, image: '/images/Paul.jpeg' },
    { id: 9, name: 'Nudge-Budger', type_1: 'Normal', type_2: 'Normal', HP: 10, attack: 65, defence: 65, Sp_attack: 65, Sp_defence: 65, speed: 65, image: '/images/Tuppence.jpeg' },
    { id: 10, name: 'Retrievix', type_1: 'Fairy', type_2: 'Fire', HP: 10, attack: 40, defence: 56, Sp_attack: 89, Sp_defence: 66, speed: 79, image: '/images/Phoenix.jpeg' },
  ]);
};
