import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllPokehumansThunk } from '../actions/pokehumans'
import { postUserTeamThunk } from '../actions/userTeams'

function Dex() {
  const dispatch = useDispatch()
  const humans = useSelector((store) => store.pokehumans)
  const alreadyAddedIds = useSelector((store) =>
    store.pokehumans.map((pokes) => pokes.id)
  )
  // console.log('whats in this ', alreadyAddedIds)

  const auth = useSelector((state) => state.auth)

  const handleAdd = (id, pokeId) => {
    dispatch(postUserTeamThunk(id, pokeId))
  }

  useEffect(() => {
    dispatch(getAllPokehumansThunk())
  }, [])

  return (
    <>
      <h2 className="dex-title">PokeHumans Dex</h2>
      <div className="dex-card">
        {humans.map((pokes) => {
          return (
            <div key={pokes.id} className="dex-wapper">
              <Link to={`/dex/${pokes.id}`}>
                <img src={pokes.image} alt={pokes.name} />
              </Link>
              <p className="dex-name">{pokes.name}</p>
              <div className="Type-box">
                <p className={`type-${pokes.type1}`}>{pokes.type1}</p>
                {pokes.type1 === pokes.type2 ? (
                  <></>
                ) : (
                  <p className={`type-${pokes.type2}`}>{pokes.type2}</p>
                )}
              </div>
              {auth.isAuthenticated ? (
                <div className="dex-add-container">
                  <p>Add to your team:</p>
                  <button
                    className="dex-add"
                    onClick={() => handleAdd(auth.user.id, pokes.id)}
                    disabled={alreadyAddedIds.includes(pokes)}
                  >
                    ADD
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Dex
