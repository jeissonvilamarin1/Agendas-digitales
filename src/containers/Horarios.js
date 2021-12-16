import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getFirestore, doc, getDoc, updateDoc } from "@firebase/firestore";
import { v4 } from "uuid";
import AgregarAgenda from "../components/Agenda";
import { ButtonBack, ContainerSectionHero, ContainerSections, HeaderInfo, HeaderSections, HeaderWelcomeQuestion, HeaderWelcomeText } from "../styles/styles";
import { Link } from "react-router-dom";
import { ListaAgenda} from "../components/todo/ListaAgenda"

const firestore = getFirestore();

export const Horario = () => {

  const horarioGuardada = localStorage.getItem("horario")
    ? JSON.parse(localStorage.getItem("horario"))
    : [];

  const [horario, sethorario] = useState(horarioGuardada);

  useEffect(() => {
    localStorage.setItem("horario", JSON.stringify(horario));
  }, [horario]);

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
      console.log(infoDocu.horario)
      if(infoDocu.horario){
        return infoDocu.horario;
      }else{
        await updateDoc(docuRef, { horario: horario });
        const consulta = await getDoc(docuRef);
        const infoDocu = consulta.data();
        console.log(infoDocu);
        return infoDocu.horario;
      }
    } else {
      // si no existe
      await updateDoc(docuRef, { horario: horario });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      console.log(infoDocu);
      return infoDocu.horario;
    }
  }

  useEffect(() => {
    async function fetchhorario() {
      const tareasFetchadas = await buscarDocumentOrCrearDocumento(id);
      console.log(tareasFetchadas);
      localStorage.setItem("horario", JSON.stringify(tareasFetchadas))
      sethorario(tareasFetchadas);
    }

    fetchhorario();
  }, [id]);
  console.log({ id });

  const [inputhorario, setInputhorario] = useState("");
  const [contador, setcontador] = useState(1);
  const [agregarhorario, setagregarhorario] = useState(false);

  const handleInput = (e) => {
    setInputhorario(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setagregarhorario(true)
    sethorario([
      ...horario,{
        id: v4(),
        texto:  inputhorario,
      }
        
    ]);
    setInputhorario("");
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
            <HeaderWelcomeText>Horario</HeaderWelcomeText>
            <HeaderWelcomeQuestion>Es hora de dejar de procrastinar</HeaderWelcomeQuestion>
          </HeaderInfo>
        </HeaderSections>
        <ContainerSectionHero>
      
         {agregarhorario ? (
        <form className="formulario-editar-tarea">
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value="hola"
            />
            <button className="formulario-editar-tarea__btn">
              OK
            </button>
          </form>
        ) : (
    ""
        )}
          <form className="formulario-editar-tarea" onSubmit={handleSubmit}>
          <div className="footerhorarios">
          <button type="submit" className="formulario-tareas__btnhorarios">
            +
          </button>  </div>  </form>
         
        

        </ContainerSectionHero>
      </ContainerSections>
    </>
  );
};


