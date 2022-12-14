import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { getAllPokehumansThunk } from '../actions/pokehumans'
import { getDexEntryThunk } from '../actions/dexentry'

export default function DexEntry() {
  const dispatch = useDispatch()
  const dexEntry = useSelector((store) => store.dexEntry)
  const pokehuman = useSelector((store) => store.pokehumans)
  const lastEntry = pokehuman?.slice(-1)
  const lastNumber = lastEntry[0]?.id

  let { id } = useParams()

  useEffect(() => {
    dispatch(getAllPokehumansThunk())
    dispatch(getDexEntryThunk(id))
  }, [id])

  return (
    <>
      <div className="entry-container">
        <div className="entry-button-container">
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
          <h1 className="title-font">{dexEntry?.name}</h1>
          <img src={dexEntry?.image} alt="A dexEntry!" />
          <div className="entry-display-types">
            <p className={`type-${dexEntry?.type_1}`}>{dexEntry?.type_1}</p>
            {dexEntry?.type_1 === dexEntry?.type_2 ? (
              <p></p>
            ) : (
              <p className={`type-${dexEntry?.type_2}`}>{dexEntry?.type_2}</p>
            )}
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat-name">HP: {dexEntry?.HP}</div>
              <div className="stat-bar">
                <div className="stat-HP" style={{ maxWidth: `100%` }}></div>
              </div>
            </div>

            <div className="stat">
              <div className="stat-name">Attack: {dexEntry?.attack}</div>
              <div className="stat-bar">
                <div
                  className="stat-attack"
                  style={{ maxWidth: `${dexEntry?.attack}%` }}
                ></div>
              </div>
            </div>

            <div className="stat">
              <div className="stat-name">Defence: {dexEntry?.defence}</div>
              <div className="stat-bar">
                <div
                  className="stat-defence"
                  style={{ maxWidth: `${dexEntry?.defence}%` }}
                ></div>
              </div>
            </div>

            <div className="stat">
              <div className="stat-name">
                Special Attack: {dexEntry?.Sp_attack}
              </div>
              <div className="stat-bar">
                <div
                  className="stat-Sp-attack"
                  style={{ maxWidth: `${dexEntry?.Sp_attack}%` }}
                ></div>
              </div>
            </div>

            <div className="stat">
              <div className="stat-name">
                Special Defence: {dexEntry?.Sp_defence}
              </div>
              <div className="stat-bar">
                <div
                  className="stat-Sp-defence"
                  style={{ maxWidth: `${dexEntry?.Sp_defence}%` }}
                ></div>
              </div>
            </div>

            <div className="stat">
              <div className="stat-name">Speed: {dexEntry?.speed}</div>
              <div className="stat-bar">
                <div
                  className="stat-speed"
                  style={{ maxWidth: `${dexEntry?.speed}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
