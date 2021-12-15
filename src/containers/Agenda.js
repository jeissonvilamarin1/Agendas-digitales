import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getFirestore, doc, getDoc, setDoc } from "@firebase/firestore";
import { v4 } from "uuid";
import AgregarAgenda from "../components/Agenda";
import { ButtonBack, ContainerSectionHero, ContainerSections, HeaderInfo, HeaderSections, HeaderWelcomeQuestion, HeaderWelcomeText } from "../styles/styles";
import { Link } from "react-router-dom";
import { ListaAgenda} from "../components/todo/ListaAgenda"

const firestore = getFirestore();

export const Agenda = () => {

  const agendaGuardada = localStorage.getItem("agenda")
    ? JSON.parse(localStorage.getItem("agenda"))
    : [];

  const [agenda, setagenda] = useState(agendaGuardada);

  useEffect(() => {
    localStorage.setItem("agenda", JSON.stringify(agenda));
  }, [agenda]);

  //-----------------------------------------------------------------------------

  const state = useSelector((store) => store);
  console.log(state);
  const id = state.login.id;

  async function buscarDocumentOrCrearDocumento(idDocumento) {
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    const consulta = await getDoc(docuRef);
    

    if (consulta.exists()) {
      // si sí existe
      const infoDocu = consulta.data();
      console.log(infoDocu.agenda)
      if(infoDocu.agenda){
        return infoDocu.agenda;
      }else{
        await setDoc(docuRef, { agenda: agenda });
        const consulta = await getDoc(docuRef);
        const infoDocu = consulta.data();
        console.log(infoDocu);
        return infoDocu.agenda;
      }
    } else {
      // si no existe
      await setDoc(docuRef, { agenda: agenda });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      console.log(infoDocu);
      return infoDocu.agenda;
    }
  }

  useEffect(() => {
    async function fetchagenda() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(id);
      console.log(tareasFetchadas);
      localStorage.setItem("agenda", JSON.stringify(tareasFetchadas))
      setagenda(tareasFetchadas);
    }

    fetchagenda();
  }, [id]);
  console.log({ id });

  const [inputagenda, setInputagenda] = useState("");

  const handleInput = (e) => {
    setInputagenda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setagenda([
      ...agenda,
         inputagenda,
    ]);
    setInputagenda("");
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
            <HeaderWelcomeText>Agenda</HeaderWelcomeText>
            <HeaderWelcomeQuestion>¿Y hoy que estas pensando?</HeaderWelcomeQuestion>
          </HeaderInfo>
        </HeaderSections>
        <ContainerSectionHero>
        <form className="formulario-tareastext" onSubmit={handleSubmit}>
          <textarea
            type="text"
            className="formulario-tareas__textarea"
            placeholder="Escribe tus notas"
            value={inputagenda}
            onChange={(e) => handleInput(e)}

          />

          <button type="submit" className="formulario-tareas__btn">
            +
          </button>  
          </form>

          < ListaAgenda
           agenda={agenda}
           setagenda={setagenda}
          />
          <AgregarAgenda
            id={id}
            arrayAgenda={agenda}
          />
        

        </ContainerSectionHero>
      </ContainerSections>
    </>
  );
};


