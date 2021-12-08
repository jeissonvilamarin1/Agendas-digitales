import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home'
import { Calendario } from '../containers/Calendario';
import { Perfil } from '../containers/Perfil';
import {TodoApp} from '../components/todo/Todo';
import { Metas } from '../containers/Metas';


const RoutesApp = () => {
  return (
    <>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/tareas" element={<TodoApp/>} />
          <Route path="/metas" element={<Metas/>} />
        </Routes>
        </>
  );
}

export default RoutesApp;
