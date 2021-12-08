import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/loginAction";
import { FormularioPerfil } from "../components/FormularioPerfil";
import { Navbar } from "../components/Navbar";
import {
  ButtonBlue,
  ButtonOrange,
  ProfileContainer,
  CardWelcomeContainer,
  CardWelcomeQuestion,
  CardWelcomeText,
  ButtonProfileContainer,
  ButtonBlack,
  ContainerProfile,
} from "../styles/styles";

export const Perfil = () => {
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div>
      <ContainerProfile>
        <CardWelcomeContainer>
          <CardWelcomeText>Mi Perfil</CardWelcomeText>
          <CardWelcomeQuestion>
            No me olvides, mantenme actualizado
          </CardWelcomeQuestion>
        </CardWelcomeContainer>
        <ProfileContainer>
          <ButtonProfileContainer>
            <ButtonBlack
              variant="btn btn-info"
              type="submit"
              onClick={handleLogout}
            >
              Cargar Imagen
            </ButtonBlack>
            <ButtonBlack
              variant="btn btn-info"
              type="submit"
              onClick={handleLogout}
            >
              Eliminar
            </ButtonBlack>
          </ButtonProfileContainer>

          <FormularioPerfil />
          <ButtonBlue
            variant="btn btn-info"
            type="submit"
            onClick={handleLogout}
          >
            Salir
          </ButtonBlue>
          <Link to="/tareas">
            <ButtonOrange variant="btn btn-info" type="submit">
              Tareas
            </ButtonOrange>
          </Link>
        </ProfileContainer>
        <Navbar />
      </ContainerProfile>
    </div>
  );
};
