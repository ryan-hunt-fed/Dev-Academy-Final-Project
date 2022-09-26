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
        <h2 className="user-h2">My Team</h2>
        <div className="dex-card">
          {useTeam?.map((poke, idx) => {
            return (
              <div key={idx} className="dex-wapper">
                <img src={poke.image} alt={poke.name} />
                <p>{poke.name}</p>
                <div className="Type-box">
                  <p className={`type-${poke.type_1}`}>{poke.type_1}</p>
                  {poke.type_1 === poke.type_2 ? (
                    <></>
                  ) : (
                    <p className={`type-${poke.type_2}`}>{poke.type_2}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default UserTeam
