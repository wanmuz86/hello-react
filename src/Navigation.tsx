import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import User from './User'
// Latest version of useHistory, we are using react-router-dom v6, 
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'

const Navigation = () => {
    const navigate = useNavigate()

    const navigateProg = () => {
        navigate('/user/123')
    }
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/user/1">User 1</Link></li>
                    <li><Link to="/user/2">User 2</Link></li>
                    <li><Link to="/profile">Profile page</Link></li>
                    <button onClick={navigateProg}>Navigate Programtically</button>

                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/user/:userId' element={<User />}></Route>
                <Route path='/profile/*' element={<Profile/>}></Route>
            </Routes>
        </>
    )
}

export default Navigation