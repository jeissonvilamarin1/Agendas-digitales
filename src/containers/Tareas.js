import React, { useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { getFirestore, doc, getDoc, setDoc } from "@firebase/firestore";
import { Container, Button } from "react-bootstrap";
import AgregarTarea from "../components/AgregarTareas";
import Listartareas from "../components/Listartareas";
import { AuthContext } from '../components/authContext'


const firestore = getFirestore();

const Tareas = () => {

  const state = useSelector((store) => store)
  console.log(state)
  const id= state.login.id

  const [arrayTareas, setArrayTareas] = useState(null);
  const fakeData = [];

  async function buscarDocumentOrCrearDocumento(idDocumento) {
      console.log(idDocumento)
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    const consulta = await getDoc(docuRef);
    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
      console.log(infoDocu)
      console.log(infoDocu.mensaje)
      return setArrayTareas(infoDocu.tareas);
    } else {
      // si no existe
      await setDoc(docuRef, { tareas: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      console.log(infoDocu)
      return setArrayTareas(infoDocu.tareas);
    }
  }

  useEffect(() => {
    async function fetchTareas() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(
        id
      );
      console.log(tareasFetchadas)
      setArrayTareas(tareasFetchadas);
    }

    fetchTareas();
  }, []);
  console.log(arrayTareas)
  console.log({id})
  return (
    <Container>
    
      <AgregarTarea
         id={id} arrayTareas={arrayTareas} setArrayTareas={setArrayTareas}
      />
   
      {arrayTareas ? (
       "ok"
      ) : null}
    </Container>
  );
};

export default Tareas;