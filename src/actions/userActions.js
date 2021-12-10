import { types } from "../types/types";
import { getProfile, updateProfile } from "../../services/user";
import { doc, setDoc, updateDoc} from "@firebase/firestore";
import Swal from "sweetalert2";


const updateProfileUser = (id, data) => {
  return (dispatch) => {
    try {
      const docuRef = doc(db,  "perfil", `${id}`);
      updateDoc(docuRef, { informacion: data })
      .then((profile) => {
        dispatch({
          type: types.getProfile,
          payload: profile,
        });
        Swal.fire({
          position: "center",
          text: "Actualización Exitosa",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ha Ocurrido un Error",
        text: error.message,
        footer: "",
      });
    }
  };
};

export default updateProfileUse;
