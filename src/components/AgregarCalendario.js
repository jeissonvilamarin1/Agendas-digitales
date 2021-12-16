import React from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import { registerCalendario } from "../actions/tasksAction";
import { useDispatch } from 'react-redux';
import { ButtonBlue } from "../styles/styles";


const AgregarCalendario= ({id, arrayCalendario}) => {
console.log(id)
const dispatch = useDispatch();

const hanleRegistro= e =>{
  e.preventDefault();
  dispatch(registerCalendario(id, arrayCalendario));
}

return (
  <Container>
    <Form onSubmit={hanleRegistro}>
      <Row className="mb-3 d-flex justify-content-center">
        <Col className="d-flex justify-content-center">
          <ButtonBlue type="submit"> Agregar Calendario</ButtonBlue>
        </Col>
      </Row>
    </Form>
  </Container>
);
};

export default AgregarCalendario;