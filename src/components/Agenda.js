import React from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import { registeragenda } from "../actions/tasksAction";
import { useDispatch } from 'react-redux';
import { ButtonBlue } from "../styles/styles";
import Swal from "sweetalert2";

const AgregarAgenda= ({id, arrayAgenda}) => {
console.log(id)
console.log(arrayAgenda)
const dispatch = useDispatch();

const hanleRegistro= e =>{
  e.preventDefault();
  dispatch(registeragenda(id, arrayAgenda))
  Swal.fire({
    position: "center",
    icon: "success",
    text: "Información Actualizada",
    title: "",
    showConfirmButton: false,
    timer: 1500,
  });
  ;
}

return (
  <Container>
    <Form onSubmit={hanleRegistro}>
      <Row className="mb-3 d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <ButtonBlue type="submit"> Agregar Notas</ButtonBlue>
        </Col>
      </Row>
    </Form>
  </Container>
);
};

export default AgregarAgenda;