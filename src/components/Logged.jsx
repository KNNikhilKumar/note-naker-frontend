import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const Logged = () => {

    const userLogged=localStorage.getItem('user');
    return (
      (!userLogged)?<Outlet />:<Navigate to="/"/>
    )

}

export default Logged