import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../components/authContext'

const PrivateRouter = ({ children }) => {

    const user = useContext(AuthContext)
   
    return (
        user ? children : <Navigate to='/login' />
    )
}

export default PrivateRouter