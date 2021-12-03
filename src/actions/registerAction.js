import { createUserWithEmailAndPassword, getAuth, updateProfile } from "@firebase/auth"
import { types } from "../types/types"

export const register = (email, password, name) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            name
        }
    }
}
export const registerEmailPassword = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                console.log(user);
                dispatch(register(user.email, user.uid, user.displayName))
            })
            .catch(error => {
                console.log(error);
            })
    }
}