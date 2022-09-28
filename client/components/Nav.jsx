import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { logoutUser } from '../actions/auth'

function Nav() {
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  const logout = () => {
    const confirmSuccess = () => navigateTo('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return (
    <>
      <div className="nav-container">
        <div className="nav-main">
          <Link to="/" className='title-font'>Home</Link>
          <Link to="/dex" className='title-font'>Dex</Link>
          <Link to="/add" className='title-font'>Add</Link>
          <Link to="/team" className='title-font'>Team Select</Link>
          <Link to="/about" className='title-font'>About</Link>
        </div>
        <div className="nav-log">
          {auth.isAuthenticated ? (
            <>
              <Link to={`/userteam/${auth.user.id}`} className='title-font'>My Team</Link>
              <Link to="/" onClick={logout} className='title-font'>
                Logout
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}

export default Nav
