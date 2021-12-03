import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from '../components/authContext'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import RoutesApp from './RoutesApp'
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { login } from '../actions/loginAction';
import { Bienvenida } from '../containers/Bienvenida'
import { Portada } from '../containers/Portada';
import { Login } from '../containers/Login';
import { Registro } from '../containers/Registro';

const AppRouter = () => {

  const [logginok, setlogginok] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setlogginok(true);

      } else {
        setlogginok(false);
      }
    });
  }, [dispatch]);

  return (
    <AuthContext.Provider value={logginok}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Portada/>} />
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path='*' element={
            <PrivateRouter>
              <RoutesApp />
            </PrivateRouter>
          } />
          <Route path='login' element={
            <PublicRouter>
              <Login />
            </PublicRouter>} />
          <Route exact path="registro" element={<Registro />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default AppRouter
