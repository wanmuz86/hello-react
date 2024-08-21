import React from 'react'
import { Route, useResolvedPath, Link, Routes } from 'react-router-dom';
import Settings from './Settings';
import Detail from './Detail';

const Profile = () => {

    const currentPath = '/profile'

    return (
        <div>
            <h1>User Profile</h1>
            <ul>
                <li><Link to={`${currentPath}/settings`} >Settings</Link></li>
                <li><Link to={`${currentPath}/details`} >Details</Link></li>
            </ul>
            <Routes>
                <Route path={`settings`} element={<Settings />} />
                <Route path={`details`} element={<Detail />} />
            </Routes>
        </div>
    )
}

export default Profile