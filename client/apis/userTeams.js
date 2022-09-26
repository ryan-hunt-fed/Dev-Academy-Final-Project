import request from 'superagent'

export async function getUserTeamsApi(id) {
  const team = await request.get('/api/v1/teams/saved/' + id)
  return team.body
}

export async function postUserTeamApi(id, pokeId) {
  const data = { id, pokeId }
  const team = await request.post('/api/v1/teams/saved/' + id).send(data)

  return team.body
}
