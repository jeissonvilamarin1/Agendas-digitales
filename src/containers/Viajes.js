import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ButtonBack,
  ButtonCalification,
  ContainerSectionHero,
  ContainerSections,
  HeaderInfo,
  HeaderSections,
  HeaderWelcomeQuestion,
  HeaderWelcomeText,
} from "../styles/styles";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../hooks/useForm";

export const Viajes = () => {

  let navigate = useNavigate();

  const handleClick = (e) =>{
        navigate(`/viajes/${e.target.id}`);
  }


  return (
    <>
      <ContainerSections>
        <HeaderSections>
          <Link to="/home">
            <ButtonBack>
              <FontAwesomeIcon icon={faAngleLeft} />
            </ButtonBack>
          </Link>
          <HeaderInfo>
            <HeaderWelcomeText>Viajes</HeaderWelcomeText>
            <HeaderWelcomeQuestion>
              Espero que planees mas de uno
            </HeaderWelcomeQuestion>
          </HeaderInfo>
        </HeaderSections>
        <ContainerSectionHero>
            <ButtonCalification id={1} onClick={(e) => handleClick(e)}>
              Viaje 1
            </ButtonCalification>
            <ButtonCalification id={2} onClick={(e) => handleClick(e)}>
              Viaje 2
            </ButtonCalification>
            <ButtonCalification id={3} onClick={(e) => handleClick(e)}>
              Viaje 3
            </ButtonCalification>
            <ButtonCalification id={4} onClick={(e) => handleClick(e)}>
              Viaje 4
            </ButtonCalification>
            <ButtonCalification id={5} onClick={(e) => handleClick(e)}>
              Viaje 5
            </ButtonCalification>

        </ContainerSectionHero>
      </ContainerSections>
    </>
  );
};
