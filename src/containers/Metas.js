import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getFirestore, doc, getDoc, setDoc } from "@firebase/firestore";
import { v4 } from "uuid";
import AgregarMetas from "../components/AgregarMetas";
import { ButtonBack, ContainerSectionHero, ContainerSections, HeaderInfo, HeaderSections, HeaderWelcomeQuestion, HeaderWelcomeText } from "../styles/styles";
import { Link } from "react-router-dom";

const firestore = getFirestore();

export const Metas = () => {

  const metasGuardadas = localStorage.getItem("metas")
    ? JSON.parse(localStorage.getItem("metas"))
    : [];

  const [metas, setMetas] = useState(metasGuardadas);

  useEffect(() => {
    localStorage.setItem("metas", JSON.stringify(metas));
  }, [metas]);

  //-----------------------------------------------------------------------------

  const state = useSelector((store) => store);
  console.log(state);
  const id = state.login.id;

  const [arrayMetas, setArrayMetas] = useState(null);

  async function buscarDocumentOrCrearDocumento(idDocumento) {
    console.log(idDocumento);
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    const consulta = await getDoc(docuRef);

    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
      console.log(metas);
      console.log(infoDocu);
      return metas;
    } else {
      // si no existe
      await setDoc(docuRef, { metas: metas });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      console.log(infoDocu);
      return infoDocu.metas;
    }
  }

  useEffect(() => {
    async function fetchTareas() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(id);
      console.log(tareasFetchadas);
      setArrayMetas(tareasFetchadas);
    }

    fetchTareas();
  }, [metas]);

  console.log(arrayMetas);
  console.log({ id });

  const [inputMetas, setInputMetas] = useState("");

  const handleInput = (e) => {
    setInputMetas(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMetas([
      ...metas,
      {
        id: v4(),
        texto: inputMetas,
      },
    ]);
    setInputMetas("");
  };

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
            <HeaderWelcomeText>Metas</HeaderWelcomeText>
            <HeaderWelcomeQuestion>Que no se te olvide ninguna</HeaderWelcomeQuestion>
          </HeaderInfo>
        </HeaderSections>
        <ContainerSectionHero>
            <form className="formulario-tareas" onSubmit={handleSubmit}>
              <input
                type="text"
                className="formulario-tareas__input"
                placeholder="Escribe una meta"
                value={inputMetas}
                onChange={(e) => handleInput(e)}
              />
              <button type="submit" className="formulario-tareas__btn">
                +
              </button>
            </form>
          <AgregarMetas
            id={id}
            arrayMetas={arrayMetas}
        
          />
        </ContainerSectionHero>
      </ContainerSections>
    </>
  );
};
