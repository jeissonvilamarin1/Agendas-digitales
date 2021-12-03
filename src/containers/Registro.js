import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Buttonlogin from "../components/Buttonlogin";
import { FormularioRegistro } from "../components/FormularioRegistro";
import {
  ButtonContainer,
  SectionImageRegister,
  SectionTitle,
} from "../styles/styles";
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { registerEmailPassword } from "../actions/registerAction";


export const Registro = () => {

  const dispatch = useDispatch();

    const [formValues] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    });

    const { nombre, email, pass1 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registerEmailPassword(email,pass1,nombre))
    }
  return (
    <>
      <Container className="container d-flex flex-column align-items-center justify-content-center">
        <SectionImageRegister
          src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638327139/Agendas%20Digitales/imagen-registro_qetqlb.png"
          alt="Persona tomando cafe"
          className="mb-4"
        />
        <SectionTitle className="text-start  mb-3 ">Registrarse</SectionTitle>

        <ButtonContainer className="gap-2">
          <FormularioRegistro onSubmit={handleRegistro} />
          <Buttonlogin/>
          <p className="text-small">
            ¿Ya tienes una cuenta?<Link to="/login">ingresa aquí</Link>
          </p>
        </ButtonContainer>
      </Container>
    </>
  );
};
