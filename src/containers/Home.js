import React from 'react'
// import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import {
  ContainerHome,
  CardContainer,
  CardCoverContainer,
  CardQuote,
  CardWelcomeContainer,
  CardWelcomeText,
} from "../styles/styles";

export const Home = () => {
      return (
        <ContainerHome>
          <CardWelcomeContainer>
            <CardWelcomeText/>
          </CardWelcomeContainer>
          <CardContainer>
            <CardQuote>Escoge la imágen que más te guste para que te acompañe e inspire en tu dia a dia</CardQuote>
            <CardCoverContainer>
              <h1>Hola Jeisson</h1>
            </CardCoverContainer>
          </CardContainer>
          <Navbar/>
        </ContainerHome>
      );
}
