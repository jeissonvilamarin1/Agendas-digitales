import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getFirestore, doc, getDoc, setDoc } from "@firebase/firestore";
import { v4 } from "uuid";
import AgregarMetas from "../components/AgregarMetas";
import { ButtonBack, ContainerSectionHero, ContainerSections, HeaderInfo, HeaderSections, HeaderWelcomeQuestion, HeaderWelcomeText } from "../styles/styles";
import { Link } from "react-router-dom";
import { Header } from "../components/todo/Header";
import { ListaMetas } from "../components/todo/ListaMetas";

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
  async function buscarDocumentOrCrearDocumento(idDocumento) {
    console.log(idDocumento);
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    const consulta = await getDoc(docuRef);

    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
      console.log(infoDocu.metas)
      if(infoDocu.agenda){
        return infoDocu.metas;
      }else{
        await setDoc(docuRef, { metas: metas });
        const consulta = await getDoc(docuRef);
        const infoDocu = consulta.data();
        console.log(infoDocu);
        return infoDocu.metas;
      }
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
    async function fetchMetas() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(id);
      console.log(tareasFetchadas);
      localStorage.setItem("metas", JSON.stringify(tareasFetchadas))
      setMetas(tareasFetchadas);
    }

    fetchMetas();
  }, [id]);

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
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadasMetas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadasMetas") === true;
  }

  // El estado de mostrar completadas
  const [mostrarCompletadas, setMostrarCompletadas] = useState(
    configMostrarCompletadas
  );
  useEffect(() => {
    localStorage.setItem("mostrarCompletadasMetas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);


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

          <ListaMetas
            tareas={metas}
            setTareas={setMetas}
            mostrarCompletadas={mostrarCompletadas}
          />
          <AgregarMetas
            id={id}
            arrayMetas={metas}

          />
          
          <Header
            mostrarCompletadas={mostrarCompletadas}
            setMostrarCompletadas={setMostrarCompletadas}
          />
        </ContainerSectionHero>
      </ContainerSections>
    </>
  );
};


