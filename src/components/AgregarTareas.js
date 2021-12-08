import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import {app} from "../firebase/firebase.js";
import { getFirestore, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useForm } from "../hooks/useForm.js";
const firestore = getFirestore(app);
const storage = getStorage(app);

const AgregarTarea = ({ correoUsuario, setArrayTareas, arrayTareas }) => {

  async function añadirTarea(e) {

    e.preventDefault();
    const descripcion = 'hola';
    console.log(descripcion)
    // crear nuevo array de tareas
    const nvoArrayTareas = [
      ...arrayTareas,
      {
        id: +new Date(),
        descripcion: descripcion
      },
    ];
    // actualizar base de datos
    const docuRef = getDocs(firestore, `usuarios/${correoUsuario}`);
    addDoc(docuRef, { tareas: '[...nvoArrayTareas]' });
    //actualizar estado
    setArrayTareas(nvoArrayTareas);
    

  }


  const [values, handleInputChange, reset] = useForm({
    tarea: ''
  })

  let {tarea} = values 

 
  return (
    <Container>
      <Form onSubmit={(e) => añadirTarea(e)}>
        <Row className="mb-5">
          <Col>
            <Form.Control
              type="text"
              name="tarea"
              placeholder="Describe tu tarea"
              value={tarea}
              onChange={handleInputChange}
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