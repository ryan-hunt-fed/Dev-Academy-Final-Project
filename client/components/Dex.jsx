import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
      <div>
        {humans.map((pokes) => {
          return (
            <div key={pokes.id}>
              <img src={pokes.image} alt={pokes.name} />
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
