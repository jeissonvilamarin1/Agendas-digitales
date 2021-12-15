import React from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import { registeragenda } from "../actions/tasksAction";
import { useDispatch } from 'react-redux';
import { ButtonBlue } from "../styles/styles";


const AgregarAgenda= ({id, arrayAgenda}) => {
console.log(id)
console.log(arrayAgenda)
const dispatch = useDispatch();

const hanleRegistro= e =>{
  e.preventDefault();
  dispatch(registeragenda(id, arrayAgenda));
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