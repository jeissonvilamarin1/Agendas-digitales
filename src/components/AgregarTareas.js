import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { registerTasks } from "../actions/tasksAction";
import { useDispatch } from "react-redux";
import { ButtonBlue } from "../styles/styles";
import Swal from "sweetalert2";

const AgregarTarea = ({ id, arrayTareas }) => {
  console.log(id);

  const dispatch = useDispatch();

  const hanleRegistro = (e) => {
    e.preventDefault();
    dispatch(registerTasks(arrayTareas, id));
    Swal.fire({
      position: "center",
      icon: "success",
      text: "Información Actualizada",
      title: "",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
      <Form onSubmit={hanleRegistro}>
        <Row >
          <Col>
            <ButtonBlue type="submit"> Guardar Checklist</ButtonBlue>
          </Col>
        </Row>
      </Form>
  );
};

export default AgregarTarea;
