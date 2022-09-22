import { getDexEntryAPI } from '../apis/dexentry'

export const GET_ENTRY = 'GET_ENTRY'

export function getDexEntryACTION(entry) {
  return {
    type: GET_ENTRY,
    payload: entry,
  }
}

// THUNK

export function getDexEntryTHUNK(id) {
  return (dispatch) => {
    getDexEntryAPI(id)
      .then((entry) => {
        dispatch(getDexEntryACTION(entry))
      })
      .catch((err) => {
        ((err.message)) 
      })
  }
}