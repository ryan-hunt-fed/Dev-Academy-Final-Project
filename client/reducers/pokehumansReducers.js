import { ADD_POKEHUMANS, GET_POKEHUMANS } from '../actions/pokehumansActions'

function reducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    //case 'SAVE_ALL_MOVIES
    case GET_POKEHUMANS:
      return payload
    case ADD_POKEHUMANS:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
