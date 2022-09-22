import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ImageUploading from 'react-images-uploading'

import { postAddPokehumanThunk } from '../actions/pokehumansActions'

function AddPokeHumans() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState()
  const [images, setImages] = useState([])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(postAddPokehumanThunk(formData))
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
      <div className='form-container'>
        <h2>Add New PokeHumans</h2>
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
        {/* <div className='form-container'> */}
          <form onSubmit={handleSubmit}>
            <div>
              <label className='name-label' htmlFor="name">Name: </label>
              <input type="text" id="name" name="name" onChange={handleChange} />
            </div>
            <div>
              <label className='type-1-label' htmlFor="type_1">Type_1: </label>
              <input
                type="text"
                id="type_1"
                name="type_1"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='type-2-label' htmlFor="type_2">Type_2: </label>
              <input
                type="text"
                id="type_2"
                name="type_2"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='hp-label' htmlFor="HP">HP: </label>
              <input type="text" id="HP" name="HP" onChange={handleChange} />
            </div>
            <div>
              <label className='attack-label' htmlFor="attack">Attack: </label>
              <input
                type="text"
                id="attack"
                name="attack"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='defence-label' htmlFor="defence">Defence: </label>
              <input
                type="text"
                id="defence"
                name="defence"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='sp-attack-label' htmlFor="Sp_attack">Sp_attack: </label>
              <input
                type="text"
                id="Sp_attack"
                name="Sp_attack"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='sp-defence-label' htmlFor="Sp_defence">Sp_defence: </label>
              <input
                type="text"
                id="Sp_defence"
                name="Sp_defence"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className='speed-label' htmlFor="speed">Speed: </label>
              <input type="text" id="speed" name="speed" onChange={handleChange} />
            </div>

            <button className='add-pokehuman-button'>Add PokeHuman</button>
          </form>
         
        {/* </div> */}
      </div>
    </>
  )
}

export default AddPokeHumans
