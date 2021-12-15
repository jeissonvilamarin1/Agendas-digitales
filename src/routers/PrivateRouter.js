import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../components/authContext'

const PrivateRouter = ({ isAuthenticated, children }) => {

    return (
        isAuthenticated ? children : <Navigate to='/login' />
    )
}

export default PrivateRouter