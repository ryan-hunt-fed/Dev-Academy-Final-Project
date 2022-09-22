import request from 'superagent'

export function getAllPokesApi() {
  return request.get('/api/v1/pokehumans').then((res) => res.body)
}

export async function addPokeHumanApi(formData) {
  const pokeHuman = await request.post('/api/v1/pokehumans').send(formData)
  return pokeHuman.body
}
