import { createUserWithEmailAndPassword, getAuth, updateProfile } from "@firebase/auth"
import { types } from "../types/types"



export const register = (email, password, nombre) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            nombre
        }
    }
}
export const registerEmailPassword = ({email, password, nombre}) => {
    return (dispatch) => {
        console.log(email, password, nombre)
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                console.log(user);
                await updateProfile(auth.currentUser, { displayName: nombre })
                dispatch(register(user.email, user.uid, user.displayName))
            })
            .catch(error => {
                console.log(error);
            })
    }
}