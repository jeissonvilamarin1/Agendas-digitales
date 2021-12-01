import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { ButtonBlue, ErrorInfo, SuccessInfo } from '../styles/styles';

export const FormularioRegistro = () => {
      const [formularioEnviado, setFormularioEnviado] = useState(false)

      return (
        <>
          <Formik
            initialValues={{ nombre: "", correo: "", password: "" }}
            validate={(valores) => {
              let errores = {};

              //Validacion Nombre
              if (!valores.nombre) {
                errores.nombre = "Por favor ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                errores.nombre =
                  "El nombre solo puede contener letras";
              }

              //Validacion correo
              if (!valores.correo) {
                errores.correo = "Por favor ingresa un correo";
              } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                errores.correo =
                  "El correo solo puede contener letras, numeros, puntos, y guiones";
              }

              return errores;
            }}
            onSubmit={(valores, { resetForm }) => {
              console.log("Formulario enviado");
              setFormularioEnviado(true);
              setTimeout(() => {
                setFormularioEnviado(false);
              }, 3000);
              resetForm();
            }}
          >
            {({ errors }) => (
              <Form>
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                  className="form-input"
                />
                <ErrorMessage
                  name="nombre"
                  component={() => <ErrorInfo>{errors.nombre}</ErrorInfo>}
                />
                <Field
                  type="text"
                  id="correo"
                  name="correo"
                  placeholder="Ingresa tu email"
                  className="form-input"
                />
                <ErrorMessage
                  name="correo"
                  component={() => <ErrorInfo>{errors.correo}</ErrorInfo>}
                />
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  className="form-input"
                />
                <ButtonBlue type="submit">Registrarse</ButtonBlue>
                {formularioEnviado && <SuccessInfo>Formulario enviado con exito!</SuccessInfo>}
              </Form>
            )}
          </Formik>
        </>
      );
}
