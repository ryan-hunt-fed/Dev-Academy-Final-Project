import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginUser, loginError } from '../actions/auth'

function Login() {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((redux) => redux.auth)

  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    const confirmSuccess = () => navigateTo('/')
    dispatch(loginUser(formData, confirmSuccess))
  }

  return (
    <form className="login-from" onSubmit={handleSubmit}>
      <h2 className="login-title title-font">Login</h2>
      <hr />
      {auth.errorMessage && (
        <span className="login-error">{auth.errorMessage}</span>
      )}
      <label className="login-user">
        Username
        <input
          required
          placeholder="User Name"
          type="text"
          name="username"
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label className="login-password">
        Password
        <input
          required
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <input className="login-button" value="Login" type="submit" />
    </form>
  )
}

export default Login
