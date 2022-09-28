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
    dispatch(deleteUserTeamThunk(pokehumans_id))
  }

  return (
    <>
      <div>
        <h2 className="user-h2 title-font">My Team</h2>
        <div className="dex-card">
          {useTeam?.map((poke, idx) => {
            return (
              <div key={idx} className="dex-wapper">
                <img src={poke.image} alt={poke.name} />
                <p className='"title-font'>{poke.name}</p>
                <button
                  onClick={() => {
                    handleClick(poke.id)
                  }}
                >
                  Release
                </button>

                <div className="Type-box">
                  <p className={`type-${poke.type_1}`}>{poke.type_1}</p>
                  {poke.type_1 === poke.type_2 ? (
                    <></>
                  ) : (
                    <p className={`type-${poke.type_2}`}>{poke.type_2}</p>
                  )}
                </div>
                <div className="stats">
                  <div className="stat">
                    <div className="stat-name">HP: {poke?.HP}</div>
                    <div className="stat-bar">
                      <div
                        className="stat-HP"
                        style={{ maxWidth: `100%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-name">Attack: {poke?.attack}</div>
                    <div className="stat-bar">
                      <div
                        className="stat-attack"
                        style={{ maxWidth: `${poke?.attack}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-name">Defence: {poke?.defence}</div>
                    <div className="stat-bar">
                      <div
                        className="stat-defence"
                        style={{ maxWidth: `${poke?.defence}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-name">
                      Special Attack: {poke?.Sp_attack}
                    </div>
                    <div className="stat-bar">
                      <div
                        className="stat-Sp-attack"
                        style={{ maxWidth: `${poke?.Sp_attack}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-name">
                      Special Defence: {poke?.Sp_defence}
                    </div>
                    <div className="stat-bar">
                      <div
                        className="stat-Sp-defence"
                        style={{ maxWidth: `${poke?.Sp_defence}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-name">Speed: {poke?.speed}</div>
                    <div className="stat-bar">
                      <div
                        className="stat-speed"
                        style={{ maxWidth: `${poke?.speed}%` }}
                      ></div>
                    </div>
                  </div>
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
