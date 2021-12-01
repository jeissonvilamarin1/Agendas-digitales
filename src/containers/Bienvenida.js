import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ButtonBlue ,ButtonContainer, SectionImage, SectionTitle } from "../styles/styles";

export const Bienvenida = () => {
  return (
    <>
      <Container className="container d-flex flex-column align-items-center justify-content-center">
        <SectionImage
          src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638305470/Agendas%20Digitales/imagen-bienvenida_hwdoov.png"
          alt="Persona Estudiando"
          className="mb-4"
        />
        <SectionTitle className="text-start ms-2 mb-3 ">
          Bienvenido a tu Agenda Digital
        </SectionTitle>

        <ButtonContainer className="gap-2">
          <Link to="/login">
            <ButtonBlue>
              Iniciar Sesión
            </ButtonBlue>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  );
};
