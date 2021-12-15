import React from 'react'
import { Navigate } from 'react-router'


const PublicRouter = ({ isAuthenticated, children }) => {

  
    return (
        ! isAuthenticated ? children: <Navigate to="/home" /> 
    )
}

export default PublicRouter