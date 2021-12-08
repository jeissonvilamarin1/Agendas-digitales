import React, { useEffect, useState } from "react";
import { FormularioTareas } from "./FormularioTareas";
import { Header } from "./Header";
import { ListaTareas } from "./ListaTareas";
import { useSelector } from "react-redux";
import { getFirestore, doc, getDoc, setDoc } from "@firebase/firestore";
import AgregarTarea from "../AgregarTareas";

const firestore = getFirestore();

export const TodoApp = () => {
  // Obtenermos las tareas guardadas de local storage
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

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
  
  const state = useSelector((store) => store);
  console.log(state);
  const id = state.login.id;

  const [arrayTareas, setArrayTareas] = useState(null);
  const fakeData = [];

  async function buscarDocumentOrCrearDocumento(idDocumento) {
    console.log(idDocumento);
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    const consulta = await getDoc(docuRef);
    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
      console.log(tareas);
      console.log(infoDocu);
      return tareas;
    } else {
      // si no existe
      await setDoc(docuRef, { tareas: tareas });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      console.log(infoDocu);
      return infoDocu.tareas;
    }
  }

  useEffect(() => {
    async function fetchTareas() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(id);
      console.log(tareasFetchadas);
      setArrayTareas(tareasFetchadas);
    }

    fetchTareas();
  }, [tareas]);

  console.log(arrayTareas);
  console.log({ id });

  return (
    <>
      <div className="contenedor">
        <Header
          mostrarCompletadas={mostrarCompletadas}
          setMostrarCompletadas={setMostrarCompletadas}
        />
        <FormularioTareas tareas={tareas} setTareas={setTareas} />
        <ListaTareas
          tareas={tareas}
          setTareas={setTareas}
          mostrarCompletadas={mostrarCompletadas}
        />
      </div>

      <AgregarTarea
        id={id}
        arrayTareas={arrayTareas}
        setArrayTareas={setArrayTareas}
      />
    </>
  );
};
