import React from 'react'
import { Navbar } from '../components/Navbar';
import {
  ContainerHome,
  CardWelcomeContainer,
  CardWelcomeText,
  CardWelcomeQuestion,
  CardsContainer,
} from "../styles/styles";
import { Card } from '../components/Card';


export const Home = () => {
   
      

      return (
        <ContainerHome>
          <CardWelcomeContainer>
            <CardWelcomeText>Hola Juliana</CardWelcomeText>
            <CardWelcomeQuestion>¿Ya planeaste tu día?</CardWelcomeQuestion>
          </CardWelcomeContainer>
          <CardsContainer>
            <Card/>
            <Card/>
            <Card/>
          </CardsContainer>
          <Navbar />
        </ContainerHome>
      );
}
