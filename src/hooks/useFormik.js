import { useEffect } from "react";
import { useFormik } from "formik";
import { fileUpload } from "../helpers/fileUpload";
import { useDispatch } from "react-redux";
import updateProfileUser from "../actions/userActions";
//import UI from "../redux/actions/uiActions";

const useCustomFormik = (type, user) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {},
  });

  useEffect(() => {
    if (user) {
      formik.setValues({ ...user });
    }

  }, [user]);

  formik.handleSubmit = () => {
    switch (type) {
      case "updateProfile":
        const formValues = {
          email: user.email,
          password: user.password,
          Profiles:{
            name: user.name,
            imageUrl: user.imageUrl,
          }
        };
        dispatch(updateProfileUser(user.id, formValues));
        //dispatch(UI.hideModal());
        break;
      default:
        break;
    }
  };

  const handleInputChange = ({ target }) => {
    formik.setValues({
      ...formik.values,
      [target.name]: target.value,
    });
  };

  const handleInputChangeFile = (e, id) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response) => {
        document.getElementById(id).value = response;
        formik.setValues({ ...formik.values, [id]: response });
      })
      .catch((error) => {
        throw error;
      });
  };

  return [formik, formik.values, handleInputChange, handleInputChangeFile];
};
export { useCustomFormik };
