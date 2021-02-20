import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../store/reducer';
import { useStateValue } from '../../store/StateProvider';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // sign in...
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })

      }).catch(err => alert(err.message) );
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://img.icons8.com/color/480/000000/facebook-new.png" alt=""/>
        <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt=""/>
      </div>

      <Button type="submit" onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login
