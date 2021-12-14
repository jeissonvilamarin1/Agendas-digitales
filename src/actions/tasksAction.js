import { typeTareas, typeMetas } from "../types/types";
import {db} from "../firebase/firebase";
import { doc, setDoc, updateDoc} from "@firebase/firestore";

//Lectura


export const registerTasks = (arrayTareas, id) => {

    return (dispatch)=>{
      const newarray=
            [...arrayTareas];
        const docuRef = doc(db,  "usuarios", `${id}`);

        updateDoc(docuRef, { tareas: newarray })
          .then((resp) => {
            dispatch(registerTasksincronico(newarray));
          })
          .catch((error) => {
            console.log(error);
          });
    }
}

export const registerTasksincronico=(tarea)=>{
   return {
       type: typeTareas.register,
       payload: tarea
   }

}

export const registerMetas = (id, arrayMetas) => {
    return (dispatch)=>{
      const newarray=
            [ ...arrayMetas];
       
        const docuRef = doc(db,  "usuarios", `${id}`);
        updateDoc(docuRef,  {metas: [...newarray]})
        
        .then(resp=>{
           dispatch(registerMetasincronico(newarray))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}

export const registerMetasincronico=(Meta)=>{
    return {
        type: typeMetas.register,
        payload: Meta
    }
 
 }
 