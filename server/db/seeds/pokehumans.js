/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pokehumans').del()
  await knex('pokehumans').insert([
    { id: 1, name: 'Trashykris', type_1: 'Poison', type_2: 'Fire', HP: 10, attack: 43, defence: 54, Sp_attack: 86, Sp_defence: 77, speed: 62, image: 'https://www.pngitem.com/pimgs/m/454-4548741_pokemon-garbage-hd-png-download.png' },
    { id: 2, name: 'Pidming', type_1: 'Flying', type_2: 'Normal', HP: 10, attack: 60, defence: 60, Sp_attack: 60, Sp_defence: 60, speed: 89, image: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/0aa78a0061bda9d88cbb0bbf739cd9cc56522fe9.png' },
    { id: 3, name: 'Ironryan', type_1: 'Steel', type_2: 'Electric', HP: 10, attack: 59, defence: 91, Sp_attack: 53, Sp_defence: 55, speed: 42, image: 'https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/600318f01f6fb95bbdaaebfd21644d1caefd43a7.png' },
    { id: 4, name: 'Jeffykin', type_1: 'Fairy', type_2: 'Flying', HP: 10, attack: 46, defence: 58, Sp_attack: 61, Sp_defence: 96, speed: 59, image: 'https://gamepress.gg/pokemongo/sites/pokemongo/files/2020-09/600px-018Pidgeot-Mega.png' },
    { id: 5, name: 'Jordanian', type_1: 'Fighting', type_2: 'Fighting', HP: 10, attack: 98, defence: 30, Sp_attack: 64, Sp_defence: 46, speed: 72, image: 'https://pm1.narvii.com/6507/3d4254d914ca35ee5a8414679a97f52733941166_hq.jpg' },
  ]);
};
