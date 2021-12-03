import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home'
import { Calendario } from '../containers/Calendario';
import { Perfil } from '../containers/Perfil';


const RoutesApp = () => {
  return (
    <>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/perfil" element={<Perfil/>} />
        </Routes>
        </>
  );
}

export default RoutesApp;
