import { typeTareas, typeMetas } from "../types/types";
import {db} from "../firebase/firebase";
import { addDoc,collection, getDocs, doc, setDoc, updateDoc} from "@firebase/firestore";

//Lectura


export const registerTasks = (arrayTareas, id) => {

    console.log(arrayTareas)
    console.log(id)

    return (dispatch)=>{
      const newarray=
            [...arrayTareas];
       
        console.log(id)
        console.log(arrayTareas)
        const docuRef = doc(db,  "usuarios", `${id}`);
        console.log(docuRef);
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


export const registerMetas = (arrayMetas, id) => {

    console.log(arrayMetas)
    console.log(id)

    return (dispatch)=>{
      const newarray=
            [...arrayMetas];
       
        console.log(id)
        console.log(arrayMetas)
        const docuRef = doc(db,  "usuarios", `${id}`);
        console.log(docuRef);
        setDoc(docuRef,  {metas: [...newarray]})
        
       
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