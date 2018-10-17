// Dependencies
import React, { Component } from 'react';
// Assets
import logo from '../images/logo.svg';
import './css/Global.css';
import firebase from 'firebase';


class Login extends Component {

  constructor () {
    super();
    this.state = {
      user: null
    };
    // Bindeo de los this --> referenciar los objetos this
    this.handleAuth = this.handleAuth.bind(this);
  }
  
  // función para logearte por Google
  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.message}`));
  }

  render () {
    return (
      <div className="Login">
        <div className="Login-container">
          <img className="Login-name" src= { require('../images/appName.png') } alt="appName" />
          <img src={logo} className="Login-logo" alt="logo" />
          <p>
            <button className="loginBtn loginBtn--google" onClick={ this.handleAuth }>Login con Google</button>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
