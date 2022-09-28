import { GET_ENTRY } from '../actions/dexentry'

export default function reducer(state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case GET_ENTRY:
      return payload
    default:
      return state
  }
}
