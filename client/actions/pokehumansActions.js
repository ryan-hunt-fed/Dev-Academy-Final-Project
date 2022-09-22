import { addPokeHumanApi, getAllPokesApi } from '../apis/pokehumansApi'

//Variable

export const GET_POKEHUMANS = 'GET_POKEHUMANS'
export const ADD_POKEHUMANS = 'ADD_POKEHUMANS'

//Action Creator

function getPokehumansAction(humans) {
  return {
    type: GET_POKEHUMANS,
    payload: humans,
  }
}

function addPokeHuman(human) {
  return {
    type: ADD_POKEHUMANS,
    payload: human,
  }
}

//THUNK

export function getAllPokehumansThunk() {
  // api call
  // dispatch action

  return async (dispatch) => {
    try {
      const humans = await getAllPokesApi()
      // console.log('thunk ', humans)
      dispatch(getPokehumansAction(humans))
    } catch (err) {
      console.log(err.message)
    }
  }
}

export function postAddPokehuman(data) {
  return (dispatch) => {
    return addPokeHumanApi(data).then((human) => {
      dispatch(addPokeHuman(human))
    })
  }
}
