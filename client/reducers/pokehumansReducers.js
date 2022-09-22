import { GET_POKEHUMANS } from "../actions/pokehumansActions";

function reducer(state = [], action) {
  const { type, payload } = action

  switch (type) {
    //case 'SAVE_ALL_MOVIES
    case GET_POKEHUMANS:
      return payload
    default:
      return state
  }
}

export default reducer