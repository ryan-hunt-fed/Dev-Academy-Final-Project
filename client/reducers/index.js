import { combineReducers } from 'redux'

import pokehumans from './pokehumansReducers'
import dexEntry from './dexentry'
import auth from './auth'

export default combineReducers({
  pokehumans,
  dexEntry,
  auth
})
