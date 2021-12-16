import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ButtonBlue,
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

export const CalificacionesId = () => {
  const [notas, setNotas] = useState([]);

  const [formValue, handleInputChange, reset] = useForm({
      valor1:'',
      ponderacion1:'',
      valor2:'',
      ponderacion2:'',
      valor3:'',
      ponderacion3:'',
      valor4:'',
      ponderacion4:'',
      valor5:'',
      ponderacion5:'',
  });

  const {valor1, ponderacion1, valor2, ponderacion2, valor3, ponderacion3, valor4, ponderacion4, valor5, ponderacion5} = formValue;

  console.log(formValue);

  let params = useParams();

  const handleClick = (e) => {
    console.log(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(notas)
  };

  return (
    <>
      <ContainerSections>
        <HeaderSections>
          <Link to="/calificaciones">
            <ButtonBack>
              <FontAwesomeIcon icon={faAngleLeft} />
            </ButtonBack>
          </Link>
          <HeaderInfo>
            <HeaderWelcomeText>Calificaciones</HeaderWelcomeText>
            <HeaderWelcomeQuestion>
              Vamos a ver que tal te fue
            </HeaderWelcomeQuestion>
          </HeaderInfo>
        </HeaderSections>
        <ContainerSectionHero>
          <form onSubmit={handleSubmit}>
            <table>
              <tr>
                <th>Notas</th>
                <th>Ponderacion</th>
              </tr>

              <tr>
                <td>
                  <input
                    className="input-notas"
                    name={valor1}
                    placeholder="Nota 1"
                    value={valor1}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    className="input-notas"
                    name={ponderacion1}
                    placeholder="Ponderacion %"
                    value={ponderacion1}
                    onChange={() => handleInputChange}
                  />
                </td>
              </tr>
              
            </table>
            <ButtonBlue type="submit">Calcular nota</ButtonBlue>
          </form>
        </ContainerSectionHero>
      </ContainerSections>
    </>
  );
};
