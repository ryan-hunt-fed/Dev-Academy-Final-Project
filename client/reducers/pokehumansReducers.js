import { GET_POKEHUMANS } from "../actions/pokehumansActions";

const reducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case GET_POKEHUMANS:
      return payload
    default:
      return state
  }
}

export default reducer