import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import {app} from "../firebase/firebase.js";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firestore = getFirestore(app);
const storage = getStorage(app);

const AgregarTarea = ({ correoUsuario, setArrayTareas, arrayTareas }) => {
  let urlDescarga;

  async function añadirTarea(e) {
    console.log(nvoArrayTareas)
    e.preventDefault();
    const descripcion = e.target.formDescripcion.value;
    // crear nuevo array de tareas
    const nvoArrayTareas = [
      ...arrayTareas,
      {
        id: +new Date(),
        descripcion: descripcion,
        url: urlDescarga,
      },
    ];
    // actualizar base de datos
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef, { tareas: [...nvoArrayTareas] });
    //actualizar estado
    setArrayTareas(nvoArrayTareas);
    // limpiar form
    e.target.formDescripcion.value = "";
  }

  async function fileHandler(e) {
    // detectar archivo
    const archivoLocal = e.target.files[0];
    // cargarlo a firebase storage
    const archivoRef = ref(storage, `documentos/${archivoLocal.name}`);
    await uploadBytes(archivoRef, archivoLocal);
    // obtener url de descarga
    urlDescarga = await getDownloadURL(archivoRef);
  }
  return (
    <Container>
      <Form onSubmit={añadirTarea}>
        <Row className="mb-5">
          <Col>
            <Form.Control
              type="text"
              placeholder="Describe tu tarea"
              id="formDescripcion"
            />
          </Col>
          <Col>
            <Form.Control
              type="file"
              placeholder="Añade archivo"
              onChange={fileHandler}
            />
          </Col>
          <Col>
            <Button type="submit"> AgregarTarea</Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </Container>
  );
};

export default AgregarTarea;