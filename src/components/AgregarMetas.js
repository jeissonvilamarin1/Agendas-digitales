import React from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import { registerMetas } from "../actions/tasksAction";
import { useDispatch } from 'react-redux';
import { ButtonBlue } from "../styles/styles";


const AgregarMetas= ({id, arrayMetas}) => {
console.log(id)
const dispatch = useDispatch();

const hanleRegistro= e =>{
  e.preventDefault();
  dispatch(registerMetas(id, arrayMetas));
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