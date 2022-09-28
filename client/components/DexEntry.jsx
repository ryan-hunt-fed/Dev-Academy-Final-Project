import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { getDexEntryThunk } from '../actions/dexentry'

export default function DexEntry() {
  const dispatch = useDispatch()
  const dexEntry = useSelector((store) => store.dexEntry)
  const pokehuman = useSelector((store) => store.pokehumans)

  const lastEntry = pokehuman?.slice(-1)
  const lastNumber = lastEntry[0].id

  let { id } = useParams()

  useEffect(() => {
    dispatch(getDexEntryThunk(id))
  }, [id])

  return (
    <>
      <div className="entry-container">
        <div className="entry-button-container">
          {/* These currently break if they go below 1 or above 5. Future endeavour for us to fix during our end of day coding */}
          {Number(id) === 1 ? (
            <>
              <Link to={`/dex/${lastNumber}`}>
                <button className="previous-button">&laquo; Previous</button>
              </Link>
            </>
          ) : (
            <>
              <Link to={`/dex/${Number(id) - 1}`}>
                <button className="previous-button">&laquo; Previous</button>
              </Link>
            </>
          )}
          {Number(id) === lastNumber ? (
            <>
              <Link to={`/dex/1`}>
                <button className="next-button">Next &raquo;</button>
              </Link>
            </>
          ) : (
            <Link to={`/dex/${Number(id) + 1}`}>
              <button className="next-button">Next &raquo;</button>
            </Link>
          )}
        </div>
        <div className="entry-content">
          <h1 className='title-font'>{dexEntry?.name}</h1>
          <img src={dexEntry?.image} alt="A dexEntry!" />
          <div className="entry-display-types">
            <p className={`type-${dexEntry?.type_1}`}>{dexEntry?.type_1}</p>
            {dexEntry?.type_1 === dexEntry?.type_2 ? (
              <p></p>
            ) : (
              <p className={`type-${dexEntry?.type_2}`}>{dexEntry?.type_2}</p>
            )}
          </div>
          <p>HP: {dexEntry?.HP}</p>
          <p>Attack: {dexEntry?.attack}</p>
          <p>Defence: {dexEntry?.defence}</p>
          <p>Special Attack: {dexEntry?.Sp_attack}</p>
          <p>Special Defence: {dexEntry?.Sp_defence}</p>
          <p>Speed: {dexEntry?.speed}</p>
        </div>
      </div>
    </>
  )
}
