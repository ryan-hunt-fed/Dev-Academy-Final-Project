import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getUserTeamThunk } from '../actions/userTeams'

function UserTeam() {
  const dispatch = useDispatch()
  const useTeam = useSelector((store) => store.userTeam)

  let { id } = useParams()

  useEffect(() => {
    dispatch(getUserTeamThunk(id))
  }, [])

  return (
    <>
      <div>
        <h2>My Team</h2>
        {useTeam?.map((poke, idx) => {
          return (
            <div key={idx}>
              <p>{poke.name}</p>
              {/* <img src={poke.image} alt={poke.name} /> */}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default UserTeam
