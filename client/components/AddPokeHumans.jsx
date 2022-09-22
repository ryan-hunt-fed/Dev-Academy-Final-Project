import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAddPokehuman } from '../actions/pokehumansActions'

function AddPokeHumans() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState()
  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(postAddPokehuman(formData))
  }

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }

  return (
    <>
      <h2>Add New PokeHumans</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="type_1">Type_1: </label>
          <input
            type="text"
            id="type_1"
            name="type_1"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="type_2">Type_2: </label>
          <input
            type="text"
            id="type_2"
            name="type_2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="HP">HP: </label>
          <input type="text" id="HP" name="HP" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="attack">Attack: </label>
          <input
            type="text"
            id="attack"
            name="attack"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="defence">Defence: </label>
          <input
            type="text"
            id="defence"
            name="defence"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Sp_attack">Sp_attack: </label>
          <input
            type="text"
            id="Sp_attack"
            name="Sp_attack"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="Sp_defence">Sp_defence: </label>
          <input
            type="text"
            id="Sp_defence"
            name="Sp_defence"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="speed">Speed: </label>
          <input type="text" id="speed" name="speed" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input type="text" id="image" name="image" onChange={handleChange} />
        </div>
        <button>Add PokeHuman</button>
      </form>
    </>
  )
}

export default AddPokeHumans
