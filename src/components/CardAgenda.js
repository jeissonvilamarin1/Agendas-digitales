import React from "react";
import { Link } from "react-router-dom";
import { ButtonOrangeCards, CardAgendaContainer, CardCoverListContainer } from "../styles/styles";


export const CardAgenda = () => {


  return (
    <CardAgendaContainer>
      <>
        <CardCoverListContainer >
          <Link to="/checklist">
            <ButtonOrangeCards type="button">
              Agenda
            </ButtonOrangeCards>
          </Link>
        </CardCoverListContainer>
      </>
    </CardAgendaContainer>
  );
};
