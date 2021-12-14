import React from "react";
import { Link } from "react-router-dom";
import { ButtonOrangeCards, CardCoverListContainer, CardHorariosContainer } from "../styles/styles";


export const CardHorarios = () => {


  return (
    <CardHorariosContainer>
      <>
        <CardCoverListContainer >
          <Link to="/checklist">
            <ButtonOrangeCards type="button">
              Horarios
            </ButtonOrangeCards>
          </Link>
        </CardCoverListContainer>
      </>
    </CardHorariosContainer>
  );
};
