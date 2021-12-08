import { typeTareas } from "../types/types";
import {db} from "../firebase/firebase";
import { addDoc,collection, getDocs, doc, setDoc } from "@firebase/firestore";

//Lectura
export const listTasks = ({id}) => {
    return async (dispatch) => {
        const datos = await getDocs(db, `usuarios/${id}`);
        const tareas = [];
        datos.forEach((doc) => {
            tareas.push({
                ...doc.data()
            })
        });
        dispatch(listSync(tareas));
    }
}



export const listSync = (tareas) => {
    return {
        type: typeTareas.list,
        payload: tareas
    }
}


export const registerTasks = (arrayTareas, id, tareas) => {

    console.log(tareas)
    console.log(arrayTareas)
    console.log(id)

    return (dispatch)=>{
      const newarray=
            [...arrayTareas, {id:+new Date(), mensaje:tareas, fecha:+new Date()},];
       
        console.log(id)
        console.log(arrayTareas)
        const docuRef = doc(db,  "usuarios", `${id}`);
        console.log(docuRef);
        setDoc(docuRef,  {tareas: [...newarray]})
        
       
        .then(resp=>{
           dispatch(registerTasksincronico(newarray))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}



export const registerTasksincronico=(tarea)=>{
   return {
       type: typeTareas.register,
       payload: tarea
   }

}