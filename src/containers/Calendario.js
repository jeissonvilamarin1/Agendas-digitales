// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { ButtonBlack, EventContainer, CardWelcomeContainer, CardWelcomeQuestion, CardWelcomeText, ContainerCalendar } from "../styles/styles";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Navbar } from "../components/Navbar";
import { es } from "date-fns/locale";
import moment from "moment";
import swal from "sweetalert2";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "moment/locale/es-mx";


const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 12, 15),
    end: new Date(2021, 12, 16),
  },
  {
    title: "Vacation",
    start: new Date(2021, 12, 18),
    end: new Date(2021, 12, 20),
  },
  {
    title: "Conference",
    start: new Date(2021, 12, 23),
    end: new Date(2021, 12, 23),
  },
];

export const Calendario = () => {
  
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  const [allEvents, setAllEvents] = useState(events);
  console.log(allEvents)

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  }

  useEffect(() => {
    localStorage.setItem("calendario", JSON.stringify(allEvents));
  }, [allEvents]);
  
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
        <ButtonBlack style={{ marginTop: "10px" }} onClick={()=>handleAddEvent()}>
          Agregar Evento
        </ButtonBlack>
      </EventContainer>
      <Calendar
        className="calendario"
        localizer={localizer}
        events={allEvents}
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
