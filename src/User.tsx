import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    // Retrieve the userId from the params using useParams hook
    const {userId} = useParams<{userId:string}>();
  return (
    <div>
        <h1>User Page</h1>
        <p>Viewing details for user with id : {userId} </p>
    </div>
  )
}

export default User