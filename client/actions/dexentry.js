import { getDexEntryAPI } from '../apis/dexentry'

// Variable

export const GET_ENTRY = 'GET_ENTRY'

// Action Creator

export function getDexEntryAction(entry) {
  return {
    type: GET_ENTRY,
    payload: entry,
  }
}

// THUNK

export function getDexEntryThunk(id) {
  return (dispatch) => {
    getDexEntryAPI(id)
      .then((entry) => {
        dispatch(getDexEntryAction(entry))
      })
      .catch((err) => {
        ((err.message)) 
      })
  }
}