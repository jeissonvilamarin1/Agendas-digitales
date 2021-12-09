import React from "react";
import { Link } from "react-router-dom";
import { ButtonOrangeCards, CardCoverListContainer, CardListContainer } from "../styles/styles";


export const CardChecklist = () => {


  return (
    <CardListContainer>
      <>
        <CardCoverListContainer >
          <Link to="/checklist">
            <ButtonOrangeCards type="button">
              Checklist
            </ButtonOrangeCards>
          </Link>
        </CardCoverListContainer>
      </>
    </CardListContainer>
  );
};
