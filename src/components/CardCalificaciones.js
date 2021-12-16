import React from "react";
import { Link } from "react-router-dom";
import { ButtonOrangeCards, CardCalificacionesContainer, CardCoverListContainer } from "../styles/styles";


export const CardCalificaciones = () => {


  return (
    <CardCalificacionesContainer>
      <>
        <CardCoverListContainer >
          <Link to="/calificaciones">
            <ButtonOrangeCards type="button">
              Calificaciones
            </ButtonOrangeCards>
          </Link>
        </CardCoverListContainer>
      </>
    </CardCalificacionesContainer>
  );
};
