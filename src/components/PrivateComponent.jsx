import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateComponent = () => {
    const userLogged=localStorage.getItem('user');
  return (
    userLogged?<Outlet />:<Navigate to="/login"/>
  )
}

export default PrivateComponent