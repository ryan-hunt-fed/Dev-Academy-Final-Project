import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { deleteUserTeamThunk, getUserTeamThunk } from '../actions/userTeams'

function UserTeam() {
  const dispatch = useDispatch()
  const useTeam = useSelector((store) => store.userTeam)

  let { id } = useParams()

  useEffect(() => {
    dispatch(getUserTeamThunk(id))
  }, [])

  const handleClick = (pokehumans_id) => {
    console.log(pokehumans_id)
    dispatch(deleteUserTeamThunk(pokehumans_id))
  }

  return (
    <>
      <div>
        <h2>My Team</h2>
        {useTeam?.map((poke, idx) => {
          return (
            <div key={idx}>
              <p>{poke.name}</p>
              <button
                onClick={() => {
                  handleClick(poke.id)
                }}
              >
                Release
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default UserTeam
