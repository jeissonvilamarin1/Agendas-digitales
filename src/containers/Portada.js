import React from "react";
import { Container} from "react-bootstrap";
import { Link } from "react-router-dom";

export const Portada = () => {
  return (
    <>
      <Container
        className=" d-flex align-items-center justify-content-center"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          height: "100vh",
          width: "100vw",

        }}
      >
        <Link to="/bienvenida">
          <img
            src="https://res.cloudinary.com/dtp6uf9vc/image/upload/v1638301437/Agendas%20Digitales/logo-portada_decgfg.png"
            alt="Agendas Digitales"
            width="150px"
            height="200px"
          />
        </Link>
      </Container>
    </>
  );
};
