import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
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

export const CalificacionesId = () => {
  const [notas, setNotas] = useState(1);

  const [formValue, handleInputChange, reset] = useForm({
    nota1:{
      valor:'',
      ponderacion:''
    }
  });

  const { nota, ponderacion } = formValue;

  console.log(nota, ponderacion);

  let params = useParams();

  const handleClick = (e) => {
    console.log(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotas([...notas, notas]);
    reset();
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
                    name="nota"
                    placeholder="Nota 1"
                    value={nota}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    className="input-notas"
                    name="ponderacion"
                    placeholder="Ponderacion %"
                    value={ponderacion}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="input-notas"
                    name="nota"
                    placeholder="Nota 2"
                    value={nota}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    className="input-notas"
                    name="ponderacion"
                    placeholder="Ponderacion %"
                    value={ponderacion}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="input-notas"
                    name="nota"
                    placeholder="Nota 3"
                    value={nota}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    className="input-notas"
                    name="ponderacion"
                    placeholder="Ponderacion %"
                    value={ponderacion}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="input-notas"
                    name="nota"
                    placeholder="Nota 4"
                    value={nota}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    className="input-notas"
                    name="ponderacion"
                    placeholder="Ponderacion %"
                    value={ponderacion}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="input-notas"
                    name="nota"
                    placeholder="Nota 5"
                    value={nota}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    className="input-notas"
                    name="ponderacion"
                    placeholder="Ponderacion %"
                    value={ponderacion}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              
            </table>
          </form>

        </ContainerSectionHero>
      </ContainerSections>
    </>
  );
};
