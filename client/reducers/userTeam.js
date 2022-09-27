import {
  DELETE_USERTEAM,
  GET_USERTEAM,
  POST_USERTEAM,
} from '../actions/userTeams'

const reducer = (state = null, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_USERTEAM:
      return payload
    case POST_USERTEAM:
      return payload
    case DELETE_USERTEAM:
      return state.filter((team) => team.id !== payload.id)
    default:
      return state
  }
}

export default reducer
