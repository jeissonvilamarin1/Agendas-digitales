import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home'
import { Calendario } from '../containers/Calendario';
import { Perfil } from '../containers/Perfil';
import { Tareas } from '../containers/Tareas';
import { CheckList } from '../containers/CheckList';


const RoutesApp = () => {
  return (
    <>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/tareas" element={<Tareas/>} />
          <Route path="/checklist" element={<CheckList/>} />
        </Routes>
        </>
  );
}

export default RoutesApp;
