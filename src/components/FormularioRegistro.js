import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { ButtonBlue, ErrorInfo, SuccessInfo } from '../styles/styles';
import { useDispatch } from 'react-redux';
import { registerEmailPassword } from '../actions/registerAction';

export const FormularioRegistro = () => {
      const [formularioEnviado, setFormularioEnviado] = useState(false)
      const dispatch = useDispatch()

      return (
        <>
          <Formik
            initialValues={{ nombre: "", email: "", password: "" }}
            validate={(valores) => {
              let errores = {};

              //Validacion Nombre
              if (!valores.nombre) {
                errores.nombre = "Por favor ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre =
                  "El nombre solo puede contener letras";
              }

              //Validacion email
              if (!valores.email) {
                errores.email = "Por favor ingresa un email";
              } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)) {
                errores.email =
                  "El email solo puede contener letras, numeros, puntos, y guiones";
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              console.log("Formulario enviado");
              dispatch(registerEmailPassword(valores));
              setFormularioEnviado(true);
              setTimeout(() => {
                setFormularioEnviado(false);
              }, 3000);
              resetForm();
            }}
          >
            {({ errors, handleChange }) => (
              <Form>
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                  className="form-input"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="nombre"
                  component={() => <ErrorInfo>{errors.nombre}</ErrorInfo>}
                />
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
                <ButtonBlue type="submit">Registrarse</ButtonBlue>
                {formularioEnviado && <SuccessInfo>Formulario enviado con exito!</SuccessInfo>}
              </Form>
            )}
          </Formik>
        </>
      );
}
