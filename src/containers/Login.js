import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formulario } from "../components/Formulario";
import {
  ButtonContainer,
  SectionImageLogin,
  SectionTitle,
} from "../styles/styles";

export const Login = () => {
  return (
    <>
      <Container className="container d-flex flex-column align-items-center justify-content-center">
        <SectionImageLogin
          src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638311452/Agendas%20Digitales/imagen-login_asj7qe.png"
          alt="Persona Estudiando en laptop"
          className="mb-4"
        />
        <SectionTitle className="text-start  mb-3 ">
          Iniciar Sesión
        </SectionTitle>

        <ButtonContainer className="gap-2">
          <Formulario />
          <p className="text-small">
            ¿No tienes una cuenta?<Link to="/registro">ingresa aquí</Link>
          </p>
        </ButtonContainer>
      </Container>
    </>
  );
};
