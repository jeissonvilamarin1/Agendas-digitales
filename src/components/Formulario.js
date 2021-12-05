import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ButtonBlue, ErrorInfo, SuccessInfo } from "../styles/styles";
import { loginEmailPassword } from "../actions/loginAction";
import { useDispatch } from 'react-redux';


export const Formulario = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const dispatch = useDispatch()


  return (
    <>
      <Formik
        initialValues={{ password: "", email: "" }}
        validate={(valores) => {
          let errores = {};

          //Validacion email
          if (!valores.email) {
            errores.email = "Por favor ingresa un email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El email solo puede contener letras, numeros, puntos, y guiones";
          }

          //Validacion Contraseña
          if (!valores.password) {
            errores.password = "Por favor ingresa un password";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.password)) {
            errores.password = "El password solo puede contener letras";
          }
          
          return errores;
        }}
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
        {({ errors, handleChange}) => (
          <Form>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="Ingresa tu email"
              className="form-input"
              onChange={handleChange}
            />
            <ErrorMessage
              name="email"
              component={() => <ErrorInfo>{errors.email}</ErrorInfo>}
            />
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              className="form-input"
              onChange={handleChange}
            />
            <ErrorMessage
              name="password"
              component={() => <ErrorInfo>{errors.password}</ErrorInfo>}
            />
            <ButtonBlue type="submit">Ingresar</ButtonBlue>
            {formularioEnviado && 
              <SuccessInfo>Formulario enviado con exito!</SuccessInfo>
            }
          </Form>
        )}
      </Formik>
    </>
  );
};
