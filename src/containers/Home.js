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
import { store } from '../store/store';

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
            <Card />
            <Card />
            <Card />
          </CardsContainer>
          <Navbar />
        </ContainerHome>
      );
}
