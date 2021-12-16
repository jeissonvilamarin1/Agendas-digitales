import { faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2";

export const Agenda = ({ nota, editarNota, borrarNota }) => {

  const [editandoNota, setEditandoNota] = useState(false)
  const [nuevaNota, setNuevaNota] = useState(nota.texto)

  const handleSubmit = (e) => {
    e.preventDefault();
    editarNota(nota.id, nuevaNota)
    setEditandoNota(false)
  }

useEffect(() => {
if(editandoNota==true){
Swal({  
  position: "center",
  title: "Ingrese nueva nota",
  input: 'textarea',
  inputValue:nuevaNota,
  confirmButtonColor: "#fba83c", 
  inputBorderColor:"#fba83c", 
}).then((result) =>{ 
return setNuevaNota(result)
})}


}, [editandoNota])

  return (
    <li className="lista-tareas__tareaarea">
      <div className="lista-tareas__texto">
        {editandoNota ? (
          <form className="formulario-editar-tarea" onSubmit={handleSubmit}>
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaNota}
          
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              OK
            </button>
          </form>
        ) : (
          nota.texto
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
          onClick={() => borrarNota(nota.id)}
        />
      </div>
    </li>
  );
}
