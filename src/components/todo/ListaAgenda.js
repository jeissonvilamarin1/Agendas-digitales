import React, { useEffect } from 'react'
import { Agenda } from './Agenda'

export const ListaAgenda= ({agenda, setagenda}) => {
 console.log(agenda)    
    const editarNota = (id, nuevoTexto) => {
        setagenda(agenda.map((tarea) => {
            if(tarea.id===id){
                return {...tarea, texto: nuevoTexto}
            }
            return tarea;
    }))
    } 

    const borrarNota = (id) =>{
        setagenda(agenda.filter((tarea) => {
            if (tarea.id !== id) {
              return tarea;
            }
            return;
          }));
    }

    return (
        <ul className="lista-tareas">
            {agenda.length > 0 ?
            agenda.map((nota) => {
               
                    return <Agenda
                                key={nota.id}
                                nota={nota}
                                editarNota={editarNota}
                                borrarNota={borrarNota}
                            />    
            })
            :<div className="lista-tareas__mensaje">No hay tareas agregadas</div>

        }
        </ul>
    )
}
