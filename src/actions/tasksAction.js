import { typeTareas, typeMetas, typeCalendario, typeportada, typeagenda } from "../types/types";
import {db} from "../firebase/firebase";
import { doc, setDoc, updateDoc} from "@firebase/firestore";

//Tareas

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

//Metas

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

 //Calendario

 export const registerCalendario = (id, arrayCalendario) => {
   return (dispatch) => {
     const newarray = [...arrayCalendario];

     const docuRef = doc(db, "usuarios", `${id}`);
     updateDoc(docuRef, { calendario: [...newarray] })
       .then((resp) => {
         dispatch(registerCalendarioSincronico(newarray));
       })
       .catch((error) => {
         console.log(error);
       });
   };
 };

 export const registerCalendarioSincronico = (Calendario) => {
   return {
     type: typeCalendario.register,
     payload: Calendario,
   };
 };


 export const registerportada = (image, id) => {
  console.log(id)
  console.log(image)
  return (dispatch)=>{
    
      const docuRef = doc(db,  "usuarios", `${id}`);
      updateDoc(docuRef, { portada:image })
        .then((resp) => {
          dispatch(portada(image));
        })
        .catch((error) => {
          console.log(error);
        });
  }
}

export const portada=(imagen)=>{
 return {
     type: typeportada.portada,
     payload: imagen
 }

}

export const registeragenda = (id, arrayagenda) => {
  console.log(id)
  return (dispatch)=>{
    
      const docuRef = doc(db,  "usuarios", `${id}`);
      updateDoc(docuRef, { agenda:arrayagenda })
        .then((resp) => {
          dispatch(agenda(arrayagenda));
        })
        .catch((error) => {
          console.log(error);
        });
  }
}

export const agenda=(agenda)=>{
 return {
     type: typeagenda.register,
     payload: agenda
 }

}

