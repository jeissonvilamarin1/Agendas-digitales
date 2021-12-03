import React from 'react'
import { loginFacebook, loginGoogle } from '../actions/loginAction'
import { useDispatch } from 'react-redux';
import { Button } from "react-bootstrap";


export default function Buttonlogin() {

    const dispatch = useDispatch()
    const handleLoginGoogle = () => {
        dispatch(loginGoogle())
      }
      const handleLoginFacebook = () => {
        dispatch(loginFacebook())
      }
    return (
        <div className="mb-2 mx-auto">
        <Button variant="outline-light" type="submit" onClick={handleLoginGoogle}>
          <img style={{padding:"25px", width:"90px"}} className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" ></img>
        </Button>
        <Button
          variant="outline-light" onClick={handleLoginFacebook}
        >
          <img style={{width:"90px"}}
            className="imagen-facebook"
            src="https://cdn.icon-icons.com/icons2/1269/PNG/128/1497553311-103_84832.png"
            alt=""
          ></img>
        </Button> </div>
    )
}
