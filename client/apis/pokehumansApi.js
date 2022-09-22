import request from "superagent";

export function getAllPokesApi() {
  return request.get('/api/v1/pokehumans')
    .then(res => res.body)
}