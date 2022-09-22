import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ImageUploading from 'react-images-uploading'

import { postAddPokehuman } from '../actions/pokehumansActions'

function AddPokeHumans() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState()
  const [images, setImages] = useState([])

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

  const onChange = (imageList) => {
    setImages(imageList)
    setFormData({
      ...formData,
      image: imageList[0].data_url,
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

        <button>Add PokeHuman</button>
      </form>
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
            <div className="upload__image-wrapper">
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
    </>
  )
}

export default AddPokeHumans
