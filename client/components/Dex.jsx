import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllPokehumansThunk } from '../actions/pokehumansActions'

function Dex() {
  const dispatch = useDispatch()
  const humans = useSelector((store) => store.pokehumans)

  useEffect(() => {
    dispatch(getAllPokehumansThunk())
  }, [])

  return (
    <>
      <h2>Pokehumans Dex</h2>
      <div className="dex-card">
        {humans.map((pokes) => {
          return (
            <div key={pokes.id}>
              <Link to={`/dex/${pokes.id}`}>
                <img src={pokes.image} alt={pokes.name} />
              </Link>
              <p>{pokes.name}</p>
              <p>
                {pokes.type_1},{pokes.type_2}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Dex
