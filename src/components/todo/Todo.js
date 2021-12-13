import React, { useEffect, useState } from "react";
import { FormularioTareas } from "./FormularioTareas";
import { Header } from "./Header";
import { ListaTareas } from "./ListaTareas";
import { useSelector } from "react-redux";
import { getFirestore, doc, getDoc, setDoc } from "@firebase/firestore";
import AgregarTarea from "../AgregarTareas";
import { ContainerSectionHero } from "../../styles/styles";

const firestore = getFirestore();

export const TodoApp = () => {
  const state = useSelector((store) => store);
  const id = state.login.id;
  // Obtenermos las tareas guardadas de local storage
<<<<<<< HEAD
  const tareasGuardadas = async(id) => await buscarDocumentOrCrearDocumento(id);
  console.log(tareasGuardadas)
=======

  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

>>>>>>> 34605ac196679b71c519beb8a1c71c15d26d5bbb
  // Establecemos el estado de las tareas.
  const [tareas, setTareas] = useState(tareasGuardadas);
  

  //Guardando el estado dentro de local storage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Accedemos al localStorage y comprobamos si mostrar completadas es null
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === true;
  }

  // El estado de mostrar completadas
  const [mostrarCompletadas, setMostrarCompletadas] = useState(
    configMostrarCompletadas
  );
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);
  
  //-----------------------------------------------------------------------------
  
  

  const [arrayTareas, setArrayTareas] = useState(null);
  
  async function buscarDocumentOrCrearDocumento(idDocumento) {
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    const consulta = await getDoc(docuRef);
    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
<<<<<<< HEAD
=======
    
>>>>>>> 34605ac196679b71c519beb8a1c71c15d26d5bbb
      return infoDocu.tareas;
    } else {
      // si no existe
      await setDoc(docuRef, { tareas: tareas });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    }
  }

  useEffect(() => {
    async function fetchTareas() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(id);
      console.log(tareasFetchadas);
      localStorage.setItem("tareas", JSON.stringify(tareasFetchadas) )
      setTareas(tareasFetchadas);
    }

    fetchTareas();
  }, []);


  return (
    <>
      <ContainerSectionHero>
        <FormularioTareas tareas={tareas} setTareas={setTareas} />
        <ListaTareas
          tareas={tareas}
          setTareas={setTareas}
          mostrarCompletadas={mostrarCompletadas}
        />
        <AgregarTarea
          id={id}
          arrayTareas={tareas}
     
        />
          <Header
            mostrarCompletadas={mostrarCompletadas}
            setMostrarCompletadas={setMostrarCompletadas}
          />
      </ContainerSectionHero>

    </>
  );
};
