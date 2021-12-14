import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useCustomFormik } from "../hooks/useFormik";
import { useSelector } from "react-redux";
const cover = "https://fondosmil.com/fondo/9856.jpg";

export const FormularioPerfil = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const currentUser = useSelector((store) => store.login);
  const [formik, values, handleInputChange, handleInputChangeFile] =
    useCustomFormik("updateProfile", currentUser);
  console.log(currentUser)
  const {
    id,
    name,
    email, photoURL
  } = values;
  console.log(name)
  console.log(email)
  console.log(photoURL)
  return (
    <>
      <Formik
        initialValues={{ password: "", email: "" }}
        onSubmit={(valores, { resetForm }) => {
          console.log("hola");
          resetForm();
          // dispatch(loginEmailPassword(valores));
          console.log("Formulario enviado");
          setFormularioEnviado(true);
          setTimeout(() => {
            setFormularioEnviado(false);
          }, 3000);
        }}
      >
        {({ handleChange }) => (
          <Form>

            <img
              className="imagenperfil"
              src={currentUser?.photoURL || cover}
              alt="cover"
            />
            <Field
              type="text"
              id="nombre-usuario"
              name="nombre-usuario"
              value={name}
              className="form-input"
              onChange={handleInputChange}
            />
            <Field
              type="date"
              id="date"
              name="date"
              placeholder="Fecha de cumpleaños"
              className="form-input"
              onChange={handleInputChange}
            />
            <Field
              type="email"
              id="email"
              name="email"
              value={email}
              className="form-input"
              onChange={handleInputChange}
            />
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              className="form-input"
              onChange={handleInputChange}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
