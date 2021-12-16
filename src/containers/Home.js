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
import { useSelector } from "react-redux";
import { CardChecklist } from '../components/CardChecklist';
import { CardMetas } from '../components/CardMetas';
import { CardAgenda } from '../components/CardAgenda';
import { CardHorarios } from '../components/CardHorarios';
import { CardCalificaciones } from '../components/CardCalificaciones';
import { CardContrasenas } from '../components/CardContrasenas';
import { CardViajes } from '../components/CardViajes';


export const Home = () => {
   const state = useSelector(store => store)
        console.log(state)

      return (
        <ContainerHome>
          <CardWelcomeContainer>
        
            <CardWelcomeText>Hola {state.login.name}</CardWelcomeText>
            <CardWelcomeQuestion>¿Ya planeaste tu día?</CardWelcomeQuestion>
          </CardWelcomeContainer>
          <CardsContainer>
            <Card id={state.login.id}/>
            <CardChecklist />
            <CardAgenda />
            {/* <CardHorarios /> */}
            <CardCalificaciones />
            <CardMetas />
            {/* <CardContrasenas /> */}
            <CardViajes />
          </CardsContainer>
          <Navbar />
        </ContainerHome>
      );
}
