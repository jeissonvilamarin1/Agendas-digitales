import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from '../components/authContext'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import RoutesApp from './RoutesApp'
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { loginEmailPassword, login } from '../actions/loginAction';
import { Bienvenida } from '../containers/Bienvenida'
import { Portada } from '../containers/Portada';
import { Login } from '../containers/Login';
import { Registro } from '../containers/Registro';

const AppRouter = () => {

  const [logginok, setlogginok] = useState(false)
  const [checking, setChecking] = useState(true);
  const dispatch = useDispatch()
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL ))
        setlogginok(user);

      } else {
        setlogginok(false);
      }
      setChecking(false);
    });
}, [dispatch, setChecking, setlogginok])

if (checking) {
  return (
      <h1>Espere...</h1>
  )
}


  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <PublicRouter  isAuthenticated={logginok}>
          <Portada/>
          </PublicRouter>
          } />


          <Route path="/bienvenida" element={
          <PublicRouter  isAuthenticated={logginok}>
          <Bienvenida />
          </PublicRouter>
          } />

          <Route path='/*' element={
            <PrivateRouter  isAuthenticated={logginok}>
              <RoutesApp />
            </PrivateRouter>
          } />

          <Route path='/login' element={
            <PublicRouter  isAuthenticated={logginok}>
              <Login />
            </PublicRouter>} />
           
          <Route path="/registro" element={
          <PublicRouter  isAuthenticated={logginok}>
          <Registro />
          </PublicRouter>}/>

        </Routes>
      </BrowserRouter>
 
  )
}

export default AppRouter
