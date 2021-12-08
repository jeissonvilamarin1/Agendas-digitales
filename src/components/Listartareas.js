import React from "react";
import { Stack, Container, Row, Col, Button } from "react-bootstrap";
import {app} from "../firebase/firebase";
import { getFirestore, addDoc, doc } from "firebase/firestore";
const firestore = getFirestore(app);

const Listartareas = ({ arrayTareas, correoUsuario, setArrayTareas }) => {
  async function eliminarTarea(idTareaAEliminar) {
    // crear nuevo array de tareas
    const nvoArrayTareas = arrayTareas.filter(
      (objetoTarea) => objetoTarea.id !== idTareaAEliminar
    );
    // actualizar base de datos
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    addDoc(docuRef, { tareas: [...nvoArrayTareas] });
    //actualizar state
    setArrayTareas(nvoArrayTareas);
  }
  return (
    <Container>
      <Stack>
        {arrayTareas.map((objetoTarea) => {
          return (
            <>
              <Row>
                <Col>{objetoTarea.descripcion}</Col>
                <Col>
                  <a href={objetoTarea.url}>
                    <Button variant="secondary">Ver Archivo</Button>
                  </a>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() => eliminarTarea(objetoTarea.id)}
                  >
                    Eliminar Tarea
                  </Button>
                </Col>
              </Row>
              <hr />
            </>
          );
        })}
      </Stack>
    </Container>
  );
};

export default Listartareas;