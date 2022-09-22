import { combineReducers } from 'redux'
import pokehumans from './pokehumansReducers'
// import stuff from './stuff'

import dexEntry from './dexentry'

export default combineReducers({
  pokehumans,
  dexEntry
})
