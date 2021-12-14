import { faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


export const Meta = ({tarea, toggleCompletada, editarTarea, borrarTarea}) => {

    const [editandoTarea, setEditandoTarea] = useState(false)
    const [nuevaTarea, setNuevaTarea] = useState(tarea.texto)

    const handleSubmit = (e) =>{
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea)
        setEditandoTarea(false)
    }

    return (
  
     <li className="lista-tareas__tarea">
        <FontAwesomeIcon
          icon={tarea.completada ? faCheckSquare : faSquare}
          className="lista-tareas__icono lista-tareas__icono-check"
          onClick={() => toggleCompletada(tarea.id)} 
        />
        <div className="lista-tareas__texto">
          {editandoTarea ? (
            <form className="formulario-editar-tarea" onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="formulario-editar-tarea__input" 
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
              <button type="submit" className="formulario-editar-tarea__btn">
                OK
              </button>
            </form>
          ) : (
            tarea.texto
          )}
        </div>
        <div className="lista-tareas__contenedor-botones">
          <FontAwesomeIcon
            icon={faEdit}
            className="lista-tareas__icono lista-tareas__icono-accion"
            onClick={() => setEditandoTarea(!editandoTarea)}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className="lista-tareas__icono lista-tareas__icono-accion"
            onClick={()=> borrarTarea(tarea.id)}
          />
        </div>
      </li>
    );
}
