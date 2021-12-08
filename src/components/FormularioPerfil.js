import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ButtonBlue, ErrorInfo, SuccessInfo } from "../styles/styles";
import { loginEmailPassword } from "../actions/loginAction";
import { useDispatch } from 'react-redux';


export const FormularioPerfil = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const dispatch = useDispatch()


  return (
    <>
      <Formik
        initialValues={{ password: "", email: "" }}
        onSubmit={(valores, { resetForm }) => {
          console.log("hola");
          resetForm();
          dispatch(loginEmailPassword(valores));
          console.log("Formulario enviado");
          setFormularioEnviado(true);
          setTimeout(() => {
            setFormularioEnviado(false);
          }, 3000);
        }}
      >
        {({ handleChange }) => (
          <Form>
            <Field
              type="text"
              id="nombre-usuario"
              name="nombre-usuario"
              placeholder="Nombre de usuario"
              className="form-input"
              onChange={handleChange}
            />
            <Field
              type="date"
              id="date"
              name="date"
              placeholder="Fecha de cumpleaños"
              className="form-input"
              onChange={handleChange}
            />
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              className="form-input"
              onChange={handleChange}
            />
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              className="form-input"
              onChange={handleChange}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
