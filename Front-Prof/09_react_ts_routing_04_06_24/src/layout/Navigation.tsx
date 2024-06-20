import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/'>
                    Tasks
                </NavLink>
            </li>
            <li>
                <NavLink to='/users'>
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink to='/photos'>
                    Photo
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation