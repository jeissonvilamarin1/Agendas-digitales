import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home'
import { Bienvenida } from '../containers/Bienvenida'
import { Login } from '../containers/Login'
import { Registro } from '../containers/Registro'
import { Portada } from '../containers/Portada'
import { Calendario } from '../containers/Calendario';
import { Perfil } from '../containers/Perfil';


const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portada/>} />
          <Route path="/bienvenida" element={<Bienvenida/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/perfil" element={<Perfil/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default AppRouter;
