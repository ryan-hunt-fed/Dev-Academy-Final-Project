import request from "superagent";

export async function getAllPokesApi() {
  const pokes = await request.get('/api/v1/pokehumans')
  return pokes.body
}