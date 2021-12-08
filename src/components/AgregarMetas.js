import React, {useEffect} from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { registerMetas } from "../actions/tasksAction";
import { useDispatch } from 'react-redux';


const AgregarMetas= ({id, arrayMetas}) => {
console.log(id)
const dispatch = useDispatch();

const hanleRegistro= e =>{
  e.preventDefault();
  dispatch(registerMetas(arrayMetas, id));
}

return (
    <Container>
      <Form onSubmit={hanleRegistro}>
        <Row className="mb-5">
         
          <Col>
            <Button type="submit"> AgregarMeta</Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </Container>
  );
};

export default AgregarMetas;