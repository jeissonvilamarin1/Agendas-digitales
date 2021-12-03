import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../components/authContext'

const PrivateRouter = ({ children }) => {

    const user = useContext(AuthContext)
    console.log(user)
   
    return (
        console.log(user), 
        user ? children : <Navigate to='/login' />
    )
}

export default PrivateRouter