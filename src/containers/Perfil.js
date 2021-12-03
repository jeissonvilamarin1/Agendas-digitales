import React from 'react'
import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { startLogout } from '../actions/loginAction'

export const Perfil = () => {
      const dispatch = useDispatch()
      const handleLogout = () => {
          dispatch(startLogout())
  
      }
      
      return (
            <div>
                   <Button variant="btn btn-info" type="submit" onClick={handleLogout}>Salir</Button>
                  
                  <h1>Perfil</h1>
            </div>
      )
}
