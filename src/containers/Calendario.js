import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "@firebase/firestore";
import {
  ButtonBlack,
  EventContainer,
  CardWelcomeContainer,
  CardWelcomeQuestion,
  CardWelcomeText,
  ContainerCalendar,
  ButtonOrange,
} from "../styles/styles";
import ReactDatePicker from "react-datepicker";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Navbar } from "../components/Navbar";
import { es } from "date-fns/locale";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/es-mx";
import AgregarCalendario from '../components/AgregarCalendario';


const firestore = getFirestore();
const localizer = momentLocalizer(moment);

export const Calendario = () => {
  const calendarioGuardado = localStorage.getItem("calendario")
    ? JSON.parse(localStorage.getItem("calendario"))
    : [];

  const [calendario, setCalendario] = useState(calendarioGuardado);
  console.log(calendario);

  useEffect(() => {
    localStorage.setItem("calendario", JSON.stringify(calendario));
  }, [calendario]);

  //-----------------------Local--------------------------------------------

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
      const date = Math.floor(
        new Date(Number(infoDocu.calendario[0].start))
        );
        let m = moment(date);
      console.log(m.toString());

      if (infoDocu.calendario) {
        console.log(infoDocu.calendario);
        return infoDocu.calendario;
      } else {
        await updateDoc(docuRef, { calendario: calendario });
        const consulta = await getDoc(docuRef);
        const infoDocu = consulta.data();
        console.log(infoDocu);
        return infoDocu.calendario;
      }
    } else {
      // si no existe
      await setDoc(docuRef, { calendario: calendario });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      console.log(infoDocu.calendario);
      return infoDocu.calendario;
    }
  }

  useEffect(() => {
    async function fetchCalendario() {
      const calendarioFetchadas = await buscarDocumentOrCrearDocumento(id);
      console.log(calendarioFetchadas);
      localStorage.setItem("calendario", JSON.stringify(calendarioFetchadas));
      setCalendario(calendarioFetchadas);
    }

    fetchCalendario();
  }, [id]);

  const [newEvent, setNewEvent] = useState([
    {
      title: "",
      start: "",
      end: "",
    },
  ]);

  const handleAddEvent = () => {
    setCalendario([...calendario, newEvent]);
  };

  return (
    <ContainerCalendar>
      <CardWelcomeContainer>
        <CardWelcomeText>Mi Calendario</CardWelcomeText>
        <CardWelcomeQuestion>
          Para hacer mis planes realidad
        </CardWelcomeQuestion>
      </CardWelcomeContainer>
      <EventContainer>
        <input
          className="input-calendar"
          type="text"
          placeholder="Nombre del evento"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <ReactDatePicker
          placeholderText="Fecha de inicio"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
          locale={es}
          dateFormat="dd-MM-yyyy"
        />
        <ReactDatePicker
          placeholderText="Fecha final"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
          locale={es}
          dateFormat="dd-MM-yyyy"
        />
        <ButtonOrange
          style={{ marginTop: "10px" }}
          onClick={() => handleAddEvent()}
        >
          Agregar Evento
        </ButtonOrange>
        <AgregarCalendario id={id} arrayCalendario={calendario} />
      </EventContainer>
      <Calendar
        className="calendario"
        localizer={localizer}
        events={calendario}
        startAccessor="start"
        endAccessor="end"
        culture="es-mx"
        messages={{
          next: "sig",
          previous: "ant",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          noEventsInRange: "No hay eventos en agenda",
        }}
      />
      <Navbar />
    </ContainerCalendar>
  );
};
