import request from 'superagent'

export async function getDexEntryApi(id) {
  const entry = await request.get('/api/v1/dexentry/' + id)
  return entry.body
}
