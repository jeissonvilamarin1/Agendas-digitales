import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/loginAction";
import { FormularioPerfil } from "../components/FormularioPerfil";
import { Navbar } from "../components/Navbar";
import {
  ButtonBlue,
  ProfileContainer,
  CardWelcomeContainer,
  CardWelcomeQuestion,
  CardWelcomeText,
  ButtonProfileContainer,
  ButtonBlack,
  ContainerProfile,
  
} from "../styles/styles";
import { Modal } from "react-bootstrap";
import { useCustomFormik } from "../hooks/useFormik";


export const Perfil = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.login);
  const currentUser = useSelector((state) => state.user);
  const [user, setUser] = useState(currentUser);
  
  const [formik, values, handleInputChange, handleInputChangeFile] =
  useCustomFormik("updateProfile", user);

  const {
    name,
    imageUrl,
    email
  } = values;

  const handleImageProfile = () => {
    document.getElementById("imageProfile").click();
  };

  const handleCover = () => {
    document.getElementById("imageCover").click();
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
          setUser(auth);
          setLoading(false);
    } else {
      setUser(currentUser);
    }
  }, [loading, currentUser]);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div>
      <ContainerProfile>
        <CardWelcomeContainer>
          <CardWelcomeText>Mi Perfil</CardWelcomeText>
          <CardWelcomeQuestion>
            No me olvides, mantenme actualizado
          </CardWelcomeQuestion>
        </CardWelcomeContainer>
        <ProfileContainer>
          <ButtonProfileContainer>
            <ButtonBlack
              variant="btn btn-info"
              type="submit"
              onClick={handleLogout}
            >
              Cargar Imagen
            </ButtonBlack>
            <ButtonBlack
              variant="btn btn-info"
              type="submit"
              onClick={handleLogout}
            >
              Eliminar
            </ButtonBlack>
          </ButtonProfileContainer>

          <FormularioPerfil />
          
          <ButtonBlue
            variant="btn btn-info"
            type="submit"
            onClick={handleLogout}
          >
            Modificar Usuario
          </ButtonBlue>
          <ButtonBlue
            variant="btn btn-info"
            type="submit"
            onClick={handleLogout}
          >
            Salir
          </ButtonBlue>
        
            
        </ProfileContainer>
        <Navbar />
      </ContainerProfile>
    </div>
  );
};
