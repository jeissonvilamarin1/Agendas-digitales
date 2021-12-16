import React from "react";
import { Link } from "react-router-dom";
import { ButtonOrangeCards, CardCoverListContainer, CardViajesContainer } from "../styles/styles";


export const CardViajes = () => {


  return (
    <CardViajesContainer>
      <>
        <CardCoverListContainer>
          <Link to="/viajes">
            <ButtonOrangeCards type="button">
              Viajes
            </ButtonOrangeCards>
          </Link>
        </CardCoverListContainer>
      </>
    </CardViajesContainer>
  );
};
