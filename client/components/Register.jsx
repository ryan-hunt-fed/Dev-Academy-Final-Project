import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginError, registerUserRequest } from '../actions/auth'

function Register() {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const [formData, setFormData] = useState({
    username: '',
    email_address: '',
    password: '',
    confirm_password: '',
  })

  useEffect(() => {
    dispatch(loginError(''))
  }, [])

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()

    const { password, confirm_password } = formData

    if (confirm_password != password) {
      dispatch(loginError("Passwords don't match"))
    } else {
      const confirmSuccess = () => navigateTo('/')
      const userInfo = { ...formData }
      delete userInfo.confirm_password
      dispatch(registerUserRequest(userInfo, confirmSuccess))
    }
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h1 className='title-font'>Register</h1>
      <hr />
      {auth.errorMessage && <span>{auth.errorMessage}</span>}
      <label>
        Username
        <input
          required
          placeholder="User Name"
          type="text"
          name="username"
          autoComplete="username"
          onChange={handleChange}
          value={formData.username}
        />
      </label>
      <label>
        Email Address
        <input
          required
          placeholder="Email Adress"
          type="text"
          name="email_address"
          onChange={handleChange}
          value={formData.email_address}
        />
      </label>
      <br />
      <div>
        <label>
          Password
          <input
            required
            placeholder="Password"
            type="password"
            name="password"
            autoComplete="new-password"
            onChange={handleChange}
            value={formData.password}
          />
        </label>
        <label>
          Confirm Password
          <input
            required
            type="password"
            name="confirm_password"
            autoComplete="new-password"
            onChange={handleChange}
            value={formData.confirm_password}
          />
        </label>
      </div>
      <input value="Register" type="submit" />
    </form>
  )
}

export default Register
