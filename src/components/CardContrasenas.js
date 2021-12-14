import React from "react";
import { Link } from "react-router-dom";
import { ButtonOrangeCards, CardContrasenasContainer, CardCoverListContainer } from "../styles/styles";


export const CardContrasenas = () => {


  return (
    <CardContrasenasContainer>
      <>
        <CardCoverListContainer >
          <Link to="/checklist">
            <ButtonOrangeCards type="button">
              Contraseñas
            </ButtonOrangeCards>
          </Link>
        </CardCoverListContainer>
      </>
    </CardContrasenasContainer>
  );
};
