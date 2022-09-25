import { addPokeHumanApi, getAllPokesApi } from '../apis/pokehumans'

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

function addPokeHumanAction(human) {
  return {
    type: ADD_POKEHUMANS,
    payload: human,
  }
}

//THUNK

export function getAllPokehumansThunk() {
  // api call
  // dispatch action

  return (dispatch) => {
      return getAllPokesApi()
        .then((humans) => {
        dispatch(getPokehumansAction(humans))
        })
        .catch((err) => {
          ((err.message)) 
        })
  }
}

export function postAddPokehumanThunk(data) {
  return (dispatch) => {
    return addPokeHumanApi(data)
      .then((human) => {
      dispatch(addPokeHumanAction(human))
    })
      .catch((err) => {
        ((err.message)) 
    })
  }
}