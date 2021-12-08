import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../containers/Home'
import { Calendario } from '../containers/Calendario';
import { Perfil } from '../containers/Perfil';
<<<<<<< HEAD
import {TodoApp} from '../components/todo/Todo';
import { Metas } from '../containers/Metas';
=======
import { Tareas } from '../containers/Tareas';
import { CheckList } from '../containers/CheckList';
>>>>>>> jeisson


const RoutesApp = () => {
  return (
    <>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/calendario" element={<Calendario/>} />
          <Route path="/perfil" element={<Perfil/>} />
<<<<<<< HEAD
          <Route path="/tareas" element={<TodoApp/>} />
          <Route path="/metas" element={<Metas/>} />
=======
          <Route path="/tareas" element={<Tareas/>} />
          <Route path="/checklist" element={<CheckList/>} />
>>>>>>> jeisson
        </Routes>
        </>
  );
}

export default RoutesApp;
