import { combineReducers } from 'redux'

import pokehumans from './pokehumans'
import dexEntry from './dexentry'
import auth from './auth'

export default combineReducers({
  pokehumans,
  dexEntry,
  auth
})
