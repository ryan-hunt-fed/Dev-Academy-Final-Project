import React, { useState } from 'react'

function AddPokeHumans() {
  const [formData, setFormData] = useState('')
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
  }
  return (
    <>
      <h2>Add New PokeHumans</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="type_1">Type_1: </label>
          <input type="text" id="" name="type_1" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="type_2">Type_2: </label>
          <input type="text" id="" name="type_2" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="HP">HP: </label>
          <input type="text" id="" name="HP" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="attack">Attack: </label>
          <input type="text" id="" name="attack" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="defence">Defence: </label>
          <input type="text" id="" name="defence" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Sp_attack">Sp_attack: </label>
          <input type="text" id="" name="sp_attack" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Sp_defence">Sp_defence: </label>
          <input type="text" id="" name="sp_defence" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="speed">Speed: </label>
          <input type="text" id="" name="speed" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input type="text" id="" name="image" onChange={handleChange} />
        </div>
        <button>Add PokeHuman</button>
      </form>
    </>
  )
}

export default AddPokeHumans
