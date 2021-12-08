import React from "react";
import { Link } from "react-router-dom";
import {  ButtonOrangeCards, CardContainer, CardCoverContainer, CardCoverListContainer, CardImage, CardListContainer, CardQuote } from "../styles/styles";


export const CardChecklist = () => {


  return (
    <CardListContainer>
      <>
        <CardCoverListContainer>
          <Link to="/">
            <ButtonOrangeCards type="button">
              Checklist
            </ButtonOrangeCards>
          </Link>
        </CardCoverListContainer>
      </>
    </CardListContainer>
  );
};
