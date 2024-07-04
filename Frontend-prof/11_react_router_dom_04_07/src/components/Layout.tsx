// rafce (react arrow function component element) использу  аббр для создания реакт функицонального компонента
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Layout = () => {
    // прослойка которая всегда отображает наыигацуию и контент, в зависимости от адреса
    return (
        <div>
            <Navigation />
            <main>
                <Outlet/ >
            </main>
            {/* Footer */}
        </div>
        
    )
}

export default Layout