import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


export const Agenda = ({nota, editarNota, borrarNota}) => {

    const [editandoNota, setEditandoNota] = useState(false)
    const [nuevaNota, setNuevaNota] = useState(nota)

    const handleSubmit = (e) =>{
        e.preventDefault();
        editarNota(nota, nuevaNota)
        setEditandoNota(false)
    }

    return (
      <li className="lista-tareas__tarea">
        <div className="lista-tareas__texto">
          {editandoNota ? (
            <form className="formulario-editar-tarea" onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="formulario-editar-tarea__input" 
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
            />
              <button type="submit" className="formulario-editar-tarea__btn">
                OK
              </button>
            </form>
          ) : (
            nota
          )}
        </div>
        <div className="lista-tareas__contenedor-botones">
          <FontAwesomeIcon
            icon={faEdit}
            className="lista-tareas__icono lista-tareas__icono-accion"
            onClick={() => setEditandoNota(!editandoNota)}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className="lista-tareas__icono lista-tareas__icono-accion"
            onClick={()=> borrarNota(nota)}
          />
        </div>
      </li>
    );
}
