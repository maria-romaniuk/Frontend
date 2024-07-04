import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navigation.css'

const Navigation = () => {
  //ui routing пользовательский интерфейс марщтуризации. как пользователь взаимоействует с нашей логикой
  return (
    <nav className='w-100 p-3 header' >
        <div className='nav container'>
        <NavLink className='nav-link ' to='/'>Tasks</NavLink>
        <NavLink className='nav-link ' to='/users'>Users</NavLink>
        </div>
    </nav>
  )
}

export default Navigation