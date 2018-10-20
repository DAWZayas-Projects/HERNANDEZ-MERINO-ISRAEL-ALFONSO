// Dependencies
import React, { Component } from 'react';
// Assets
import logo from '../images/logo.svg';
import './css/Login.css';
import firebase from 'firebase';

class Login extends Component {
  
  // Functions

  // función para logearte por Google
  handleAuth () { 
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.message}`));
  }


  render () {
    return (
      <div className="main">
        <div className="container">
          <img className="mt-4 mb-4" src= { require('../images/appNameBlack.png') } alt="appName" />
          <img src={ logo } className="logo" alt="logo" />
          <p>
            <button className="loginBtn loginBtn--google" onClick={ this.handleAuth.bind(this) }>Inicia sesión con Google</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
