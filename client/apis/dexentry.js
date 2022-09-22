import request from 'superagent'

export async function getDexEntryAPI(id) {
  const entry = await request.get('/api/v1/dexentry/' + id)
  return entry
}