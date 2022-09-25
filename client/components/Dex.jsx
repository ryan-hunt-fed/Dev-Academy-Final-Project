import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllPokehumansThunk } from '../actions/pokehumans'

function Dex() {
  const dispatch = useDispatch()
  const humans = useSelector((store) => store.pokehumans)

  useEffect(() => {
    dispatch(getAllPokehumansThunk())
  }, [])

  return (
    <>
      <h2 className="dex-h2">Pokehumans Dex</h2>
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
                  // <p></p>
                  <></>
                ) : (
                  <p className={`type-${pokes.type2}`}>{pokes.type2}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Dex
