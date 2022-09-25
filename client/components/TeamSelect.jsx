import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getAllPokehumansThunk } from '../actions/pokehumans'

export default function TeamSelect() {
  const dispatch = useDispatch()
  const humans = useSelector((store) => store.pokehumans)
  const [team, setTeam] = useState([])

  useEffect(() => {
    dispatch(getAllPokehumansThunk())
  }, [])

  const handleSelection = (id) => {
    const selection = humans.find((pokehuman) => pokehuman.id === id)

    if (team.length >= 3) {
      alert('You already have a full team!')
    } else {
      setTeam([...team, selection])
    }
  }
  console.log(team)

  return (
    <>
      <h1 className="select-title">Select 3 PokeHumans to form your team!</h1>
      <div className="select-button-start">
        <p>Team Select</p>
        {team.length === 3 && (
          // button conditionally appears if a full team is selected
          // state is used to pass the team to the battle component
          <Link to="/battle" state={team}>
            <button className="select-button-start">Start Battle</button>
          </Link>
        )}
      </div>
      <br />
      <div className="dex-card">
        {humans.map((pokes) => {
          return (
            <div
              key={pokes.id}
              className="dex-wapper"
              onClick={() => {
                handleSelection(pokes.id)
              }}
            >
              <img className="dex-img" src={pokes.image} alt={pokes.name} />
              <p>{pokes.name}</p>
              <div className="Type-box">
                <p className={`type-${pokes.type1}`}>{pokes.type1}</p>
                {pokes.type1 === pokes.type2 ? (
                  <p></p>
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
