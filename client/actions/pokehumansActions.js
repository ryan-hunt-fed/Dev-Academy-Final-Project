import { getAllPokesApi } from '../apis/pokehumansApi'

//VAR
export const GET_POKEHUMANS = 'GET_POKEHUMANS'

//ACTION CREATOR
function getPokehumansAction(humans) {
  return {
    type: GET_POKEHUMANS,
    payload: humans
  }
}

//THUNK
export function getAllPokehumansThunk() {
  // api call
  // dispatch action

  return async (dispatch) => {
    try {
      const humans = await getAllPokesApi()
      console.log('thunk ', humans)
      dispatch(getPokehumansAction(humans))
    } catch (err) {
      console.log(err.message)
    }
  }
}