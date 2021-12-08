import React, {useEffect} from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { listTasks, registerTasks, registerid } from "../actions/tasksAction";
import { useForm } from "../hooks/useForm";
import { useDispatch } from 'react-redux';


const AgregarTarea = ({id, arrayTareas, setArrayTareas}) => {
console.log(id)
console.log(setArrayTareas)
const dispatch = useDispatch();

const [values,  handleInputChange, reset] = useForm({
    tareas: ""
})

let {tareas}=values;

const hanleRegistro= e =>{
  e.preventDefault();
  dispatch(registerTasks(arrayTareas, id, tareas));
  reset();
}

useEffect(() => {
  dispatch(listTasks);
}, [dispatch])

  return (
    <Container>
      <Form onSubmit={hanleRegistro}>
        <Row className="mb-5">
          <Col>
            <Form.Control
              type="text"
              placeholder="Describe tu tarea"
              name="tareas"
              value={tareas}
              onChange={handleInputChange}
            />
          </Col>
          <Col>
            <Button type="submit" onClick={handleInputChange}> AgregarTarea</Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </Container>
  );
};

export default AgregarTarea;