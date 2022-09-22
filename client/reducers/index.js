import { combineReducers } from 'redux'

import pokehumans from './pokehumansReducers'
import dexEntry from './dexentry'

export default combineReducers({
  pokehumans,
  dexEntry
})
