import React from "react";
import { Link } from "react-router-dom";
import { ButtonOrangeCards, CardCoverListContainer, CardMetasContainer } from "../styles/styles";


export const CardMetas = () => {


  return (
    <CardMetasContainer>
      <>
        <CardCoverListContainer>
          <Link to="/metas">
            <ButtonOrangeCards type="button">
              Metas
            </ButtonOrangeCards>
          </Link>
        </CardCoverListContainer>
      </>
    </CardMetasContainer>
  );
};
