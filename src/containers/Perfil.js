import React from 'react'
import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/loginAction'

export const Perfil = () => {
      const dispatch = useDispatch()
      const handleLogout = () => {
          dispatch(startLogout())
  
      }
      
      return (
            <div>
                   <Button variant="btn btn-info" type="submit" onClick={handleLogout}>Salir</Button>
                   <Link to="/tareas">
                   <Button variant="btn btn-info" type="submit">Tareas</Button></Link>
                   <Link to="/metas">
                   <Button variant="btn btn-info" type="submit">Metas</Button></Link>
                  
                  <h1>Perfil</h1>
            </div>
      )
}
