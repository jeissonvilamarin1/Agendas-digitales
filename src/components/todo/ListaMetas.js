import React, { useEffect } from 'react'
import { Meta } from './Meta'

export const ListaMetas = ({tareas, setTareas, mostrarCompletadas}) => {

    const toggleCompletada = (id) => {
        console.log(`${id}`)
        setTareas(tareas.map((tarea) => {
            if(tarea.id === id){
                return {...tarea, completada: !tarea.completada}
            }
            return tarea;
    }))
    } 
    
    const editarTarea = (id, nuevoTexto) => {
        console.log(`${id}`)
        setTareas(tareas.map((tarea) => {
            if(tarea.id === id){
                return {...tarea, texto: nuevoTexto}
            }
            return tarea;
    }))
    } 

    const borrarTarea = (id) =>{
        setTareas(tareas.filter((tarea) => {
            if (tarea.id !== id) {
              return tarea;
            }
            return;
          }));
    }

    return (
        <ul className="lista-metas">
            {tareas.length > 0 ?
            tareas.map((tarea) => {
                if(mostrarCompletadas){
                    return <Meta
                                key={tarea.id}
                                tarea={tarea}
                                toggleCompletada={toggleCompletada}
                                editarTarea={editarTarea}
                                borrarTarea={borrarTarea}
                            />
                }else if(!tarea.completada){
                    return (
                      <Meta
                        key={tarea.id}
                        tarea={tarea}
                        toggleCompletada={toggleCompletada}
                        editarTarea={editarTarea}
                        borrarTarea={borrarTarea}
                      />
                    );
                }
                return;      
            })
            :<div className="lista-tareas__mensaje">No hay tareas agregadas</div>

        }
        </ul>
    )
}
