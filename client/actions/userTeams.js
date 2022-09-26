import {
  getUserTeamsApi,
  postUserTeamApi,
  removeUserTeamApi,
} from '../apis/userTeams'

//Variable
export const GET_USERTEAM = 'GET_USERTEAM'
export const POST_USERTEAM = 'POST_USERTEAM'
export const DELETE_USERTEAM = 'DELETE_USERTEAM'

// Action
function getUserTeamAction(team) {
  return {
    type: GET_USERTEAM,
    payload: team,
  }
}

function postUserTeamAction(team) {
  return {
    type: POST_USERTEAM,
    payload: team,
  }
}

function deleteUserTeamAction(id) {
  return {
    type: DELETE_USERTEAM,
    payload: id,
  }
}

// THunk

export function getUserTeamThunk(id) {
  return (dispatch) => {
    getUserTeamsApi(id)
      .then((team) => {
        dispatch(getUserTeamAction(team))
      })
      .catch((err) => {
        err.message
      })
  }
}

export function postUserTeamThunk(id, pokeId) {
  return async (dispatch) => {
    const teamData = await postUserTeamApi(id, pokeId)
    dispatch(postUserTeamAction(teamData))
  }
}

export function deleteUserTeamThunk(id) {
  return (dispatch) => {
    removeUserTeamApi(id).then(() => {
      dispatch(deleteUserTeamAction(id))
    })
  }
}
