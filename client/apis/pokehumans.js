import request from 'superagent'

export async function addPokeHumanApi(formData) {
  const pokeHuman = await request.post('/api/v1/pokehumans').send(formData)
  return pokeHuman.body
}

export async function getAllPokesApi() {
  const pokes = await request.get('/api/v1/pokehumans')
  return pokes.body
}