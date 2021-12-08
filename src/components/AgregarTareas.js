import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { registerTasks } from "../actions/tasksAction";
import { useDispatch } from "react-redux";

const AgregarTarea = ({ id, arrayTareas }) => {
  console.log(id);

  const dispatch = useDispatch();

  const hanleRegistro = (e) => {
    e.preventDefault();
    dispatch(registerTasks(arrayTareas, id));
  };

  return (
    <Container>
      <Form onSubmit={hanleRegistro}>
        <Row className="mb-5">
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
