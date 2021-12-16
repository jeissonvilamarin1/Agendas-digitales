import React from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import { registerMetas } from "../actions/tasksAction";
import { useDispatch } from 'react-redux';
import { ButtonBlue } from "../styles/styles";
import Swal from "sweetalert2";

const AgregarMetas= ({id, arrayMetas}) => {
console.log(id)
const dispatch = useDispatch();

const hanleRegistro= e =>{
  e.preventDefault();
  dispatch(registerMetas(id, arrayMetas));
  Swal.fire({
    position: "center",
    icon: "success",
    text: "Información Actualizada",
    title: "",
    showConfirmButton: false,
    timer: 1500,
  });

}

return (
  <Container>
    <Form onSubmit={hanleRegistro}>
      <Row className="mb-3 d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <ButtonBlue type="submit"> Agregar Metas</ButtonBlue>
        </Col>
      </Row>
    </Form>
  </Container>
);
};

export default AgregarMetas;