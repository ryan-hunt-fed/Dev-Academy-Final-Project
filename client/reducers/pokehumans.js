import { ADD_POKEHUMANS, GET_POKEHUMANS } from '../actions/pokehumans'

export default function reducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case GET_POKEHUMANS:
      return payload
    case ADD_POKEHUMANS:
      return [...state, payload]
    default:
      return state
  }
}
