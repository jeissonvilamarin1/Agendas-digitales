import React, { useState } from 'react';
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 } from 'uuid';

export const FormularioTareas = ({tareas, setTareas}) => {

    const [inputTarea, setInputTarea] = useState('')

    const handleInput = (e) => {
        setInputTarea(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setTareas([...tareas, {
            id: v4(),
            texto: inputTarea,
            completada: false
        }])
        setInputTarea('');
    }

    return (
        <form className="formulario-tareas" onSubmit={handleSubmit}>
            <input type="text" 
            className="formulario-tareas__input"
            placeholder="Escribe una tarea"
            value={inputTarea}
            onChange={(e) => handleInput(e)}
            />
            <button 
            type="submit"
            className="formulario-tareas__btn"
            >
                +
            </button>
        </form>
    )
}
