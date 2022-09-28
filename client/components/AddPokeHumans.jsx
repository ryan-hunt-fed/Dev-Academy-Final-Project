import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ImageUploading from 'react-images-uploading'

import { addPokehumanThunk } from '../actions/pokehumans'

function AddPokeHumans() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState()
  const [images, setImages] = useState([])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(addPokehumanThunk(formData))
    navigate('/dex')
  }

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
    console.log(evt.target.value)
  }

  const onChange = (imageList) => {
    setImages(imageList)
    setFormData({
      ...formData,
      image: imageList[0].data_url,
    })
  }

  return (
    <>
      <div className="form-container">
        <h2 className='title-font pokehuman-text'>Add New PokeHumans</h2>
        <div className="App">
          <ImageUploading
            value={images}
            onChange={onChange}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload-image-wrapper">
                <button
                  style={isDragging ? { color: 'red' } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove</button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="name-label pokehuman-text">
              Name:{' '}
            </label>
            <input type="text" id="name" name="name" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="type_1" className="type-1-label pokehuman-text">
              Type 1:{' '}
            </label>
            <select id="type_1" name="type_1" onChange={handleChange}>
              <option>--Please choose your type--</option>
              <option value="Normal">Normal</option>
              <option value="Fighting">Fighting</option>
              <option value="Flying">Flying</option>
              <option value="Poison">Poison</option>
              <option value="Ground">Ground</option>
              <option value="Rock">Rock</option>
              <option value="Bug">Bug</option>
              <option value="Ghost">Ghost</option>
              <option value="Steel">Steel</option>
              <option value="Fire">Fire</option>
              <option value="Water">Water</option>
              <option value="Grass">Grass</option>
              <option value="Electric">Electric</option>
              <option value="Psychic">Psychic</option>
              <option value="Ice">Ice</option>
              <option value="Dragon">Dragon</option>
              <option value="Dark">Dark</option>
              <option value="Fairy">Fairy</option>
            </select>
          </div>
          <div>
            <label htmlFor="type_2" className="type-2-label pokehuman-text">
              Type 2:{' '}
            </label>
            <select id="type_2" name="type_2" onChange={handleChange}>
              <option>--Please choose your type--</option>
              <option value="Normal">Normal</option>
              <option value="Fighting">Fighting</option>
              <option value="Flying">Flying</option>
              <option value="Poison">Poison</option>
              <option value="Ground">Ground</option>
              <option value="Rock">Rock</option>
              <option value="Bug">Bug</option>
              <option value="Ghost">Ghost</option>
              <option value="Steel">Steel</option>
              <option value="Fire">Fire</option>
              <option value="Water">Water</option>
              <option value="Grass">Grass</option>
              <option value="Electric">Electric</option>
              <option value="Psychic">Psychic</option>
              <option value="Ice">Ice</option>
              <option value="Dragon">Dragon</option>
              <option value="Dark">Dark</option>
              <option value="Fairy">Fairy</option>
            </select>
          </div>
          <div>
            <label htmlFor="HP" className="hp-label pokehuman-text">
              HP:{' '}
            </label>
            <input
              type="number"
              min="1"
              max="10"
              id="HP"
              name="HP"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="attack" className="attack-label pokehuman-text">
              Attack:{' '}
            </label>
            <input
              type="number"
              min="1"
              max="100"
              id="attack"
              name="attack"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="defence" className="defence-label pokehuman-text">
              Defence:{' '}
            </label>
            <input
              type="number"
              min="1"
              max="100"
              id="defence"
              name="defence"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Sp_attack" className="sp-attack-label pokehuman-text">
              SP Attack:{' '}
            </label>
            <input
              type="number"
              min="1"
              max="100"
              id="Sp_attack"
              name="Sp_attack"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="Sp_defence" className="sp-defence-label pokehuman-text">
              SP Defence:{' '}
            </label>
            <input
              type="number"
              min="1"
              max="100"
              id="Sp_defence"
              name="Sp_defence"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="speed" className="speed-label pokehuman-text">
              Speed:{' '}
            </label>
            <input
              type="number"
              min="1"
              max="100"
              id="speed"
              name="speed"
              onChange={handleChange}
            />
          </div>

          <button className='register-a' disabled={!formData || formData.name === ''}>
            Add PokeHuman
          </button>
        </form>
      </div>
    </>
  )
}

export default AddPokeHumans
