import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home'
import { Calendario } from '../containers/Calendario';
import { Perfil } from '../containers/Perfil';
import { Agenda } from '../containers/Agenda';
import { CheckList } from '../containers/CheckList';
import { Metas } from '../containers/Metas';
import { Navigate } from "react-router-dom"
import { Calificaciones } from '../containers/Calificaciones';
import { CalificacionesId } from '../components/CalificacionesId';


const RoutesApp = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to="/" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/agenda" element={<Agenda/>} />
          <Route path="/checklist" element={<CheckList/>} />
          <Route path="/metas" element={<Metas/>} />
          <Route path="/calificaciones" element={<Calificaciones/>} />
          <Route path="/calificaciones/:id" element={<CalificacionesId/>} />
        </Routes>
        </>
  );
}

export default RoutesApp;
