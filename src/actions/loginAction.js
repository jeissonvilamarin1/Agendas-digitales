import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth"
import { google, facebook } from "../firebase/firebase"
import { types } from "../types/types"


export const login = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName));

            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const loginFacebook = () => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, facebook)
        .then(({ user }) => {
          dispatch(login(user.uid, user.displayName));
        })
        .catch((e) => {
          console.log(e);
        });
    };
  };

export const loginEmailPassword = ({email, password}) => {
    return (dispatch) => {
        
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                console.log('Bienvenido' + user.displayName);
            })
            .catch(error => {
                console.log(error);
                console.log('El usuario no existe');
            })
    }
}

export const logout = () => ({
    type: types.logout
})

export const startLogout = () => {
    return async (dispatch) => {
      const auth = getAuth();
      await signOut(auth);
      dispatch(logout() )
    };
  };