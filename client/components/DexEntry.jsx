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
      <div className='entry-container'>
        <div className='entry-button-container'>
          <Link to={`/dex/${Number(id) - 1}`}>
            <button className='previous-button'>Previous</button>
          </Link>
          <Link to={`/dex/${Number(id) + 1}`}>
            <button className='next-button'>Next</button>
          </Link>
        </div>
        <div className='entry-content'>
        <h1>{pokehuman?.name}</h1>
          <img src={pokehuman?.image} alt="A pokehuman!" />
          <div className='entry-display-types'>
            <p className={`type-${pokehuman?.type_1}`}>{pokehuman?.type_1}</p>
            {pokehuman?.type_1 === pokehuman?.type_2 ? (<p></p>) : (<p className={`type-${pokehuman?.type_2}`} >{pokehuman?.type_2}</p>)}
          </div>
          <p>HP: {pokehuman?.HP}</p>
          <p>Attack: {pokehuman?.attack}</p>
          <p>Defence: {pokehuman?.defence}</p>
          <p>Special Attack: {pokehuman?.Sp_attack}</p>
          <p>Special Defence: {pokehuman?.Sp_defence}</p>
          <p>Speed: {pokehuman?.speed}</p>
        </div>
       
      </div>
    </>
  )
}
