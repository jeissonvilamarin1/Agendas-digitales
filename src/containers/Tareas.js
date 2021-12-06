import React, { useState, useEffect, useContext } from "react";
import { getAuth } from "@firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "@firebase/firestore";
import { Container, Button } from "react-bootstrap";
import AgregarTarea from "../components/AgregarTareas";
import Listartareas from "../components/Listartareas";
import { AuthContext } from '../components/authContext'
const firestore = getFirestore();

const Tareas = () => {


  const user = useContext(AuthContext)
  const correoUsuario= user.email
  console.log(correoUsuario)
 
  const [arrayTareas, setArrayTareas] = useState(null);
  const fakeData = [{
    tareas:"prueba"
  }];

  async function buscarDocumentOrCrearDocumento(idDocumento) {
      console.log(idDocumento)
    //crear referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    // buscar documento
    const consulta = await getDoc(docuRef);
    // revisar si existe
    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    } else {
      // si no existe
      await setDoc(docuRef, { tareas: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.tareas;
    }
  }

  useEffect(() => {
    async function fetchTareas() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(
        correoUsuario
      );
      setArrayTareas(tareasFetchadas);
    }

    fetchTareas();
  }, []);

  return (
    <Container>
    
      <AgregarTarea
        arrayTareas={arrayTareas}
        setArrayTareas={setArrayTareas}
        correoUsuario={correoUsuario}
      />
      {arrayTareas ? (
        <Listartareas
          arrayTareas={arrayTareas}
          setArrayTareas={setArrayTareas}
          correoUsuario={correoUsuario}
        />
      ) : null}
    </Container>
  );
};

export default Tareas;