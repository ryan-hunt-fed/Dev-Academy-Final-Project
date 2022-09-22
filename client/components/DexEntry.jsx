import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { getDexEntryThunk } from '../actions/dexentry'

export default function DexEntry() {
  const dispatch = useDispatch()
  const pokehuman = useSelector((store) => store.dexEntry)

  let { id } = useParams()

  useEffect(() => {
    dispatch(getDexEntryThunk(id))
  }, [id])

  return (
    <>
      <div className="dexentry-container">
        <div>
          <Link to={`/dex/${Number(id) - 1}`}>
            <button>Down</button>
          </Link>
        </div>
        <div>
          <img src={pokehuman?.image} alt="A pokehuman!" />
          <h1>{pokehuman?.name}</h1>
          <h4 className={`type-${pokehuman?.type_1}`}>
            Type: {pokehuman?.type_1}
          </h4>
          <h4 className={`type-${pokehuman?.type_2}`}>
            Type: {pokehuman?.type_2}
          </h4>
          <h4>HP: {pokehuman?.HP}</h4>
          <h4>Attack: {pokehuman?.attack}</h4>
          <h4>Defence: {pokehuman?.defence}</h4>
          <h4>Special Attack: {pokehuman?.Sp_attack}</h4>
          <h4>Special Defence: {pokehuman?.Sp_defence}</h4>
          <h4>Speed: {pokehuman?.speed}</h4>
        </div>
        <div>
          <Link to={`/dex/${Number(id) + 1}`}>
            <button>UP</button>
          </Link>
        </div>
      </div>
    </>
  )
}
