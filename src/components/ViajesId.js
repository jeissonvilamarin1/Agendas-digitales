import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
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
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../hooks/useForm";
import { Viajes } from "../containers/Viajes";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const firestore = getFirestore();

export const ViajesId = () => {

  const params = useParams()
  
  const allViajesLocal = localStorage.getItem("allViajes")
    ? JSON.parse(localStorage.getItem("allViajes"))
    : [];

  const [allViajes, setAllViajes] = useState(allViajesLocal);

  useEffect(() => {
    localStorage.setItem("allViajes", JSON.stringify(allViajes))
  }, [allViajes]);

// Local ---------------------------------------------------
  const state = useSelector((store) => store);
  console.log(state);
  const id = state.login.id;
  
  
  const [viajes, setViajes] = useState([]);

  const [formValue, handleInputChange, reset] = useForm({
    lugares:'', cosas:'', comidas:''
  });

  const { lugares, cosas, comidas } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    setViajes({id:`${params.id}`, lugares:lugares, cosas: cosas, comidas: comidas});
    new Swal('viaje enviado')
    reset()
  };
  console.log(viajes);

  useEffect(() => {
    setAllViajes([...allViajes, viajes])
  }, [viajes])

  console.log(allViajes)

  return (
    <>
      <ContainerSections>
        <HeaderSections>
          <Link to="/viajes">
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="lugares">Lugares por visitar</label>
            <input
              className="input-viajes"
              id="lugares"
              name="lugares"
              placeholder="Lugares por conocer"
              value={lugares}
              onChange={handleInputChange}
            />
            <label htmlFor="cosas">Cosas por hacer</label>
            <input
              className="input-viajes"
              id="cosas"
              name="cosas"
              placeholder="Cosas por hacer"
              value={cosas}
              onChange={handleInputChange}
            />
            <label htmlFor="comidas">Comida por probar</label>
            <input
              className="input-viajes"
              id="comidas"
              name="comidas"
              placeholder="Comida por probar"
              value={comidas}
              onChange={handleInputChange}
            />

            <ButtonBlue type="submit">Guardar Viajes</ButtonBlue>
          </form>
        </ContainerSectionHero>
      </ContainerSections>
    </>
  );
};
