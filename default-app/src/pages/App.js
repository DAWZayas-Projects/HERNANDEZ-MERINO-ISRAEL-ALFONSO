import React, { Component } from 'react';
import firebase from 'firebase';

import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      user: null
    };
    // Bindeo de los this --> referenciar los objetos this
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  // Metodo de ciclo de vida, se dispara cuando el componente se renderiza en el DOM
  // Integrar librerias
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
    })
  }

  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.message}`));
  }

  handleLogout () {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.message}`));
  }

  renderLoginButon () {
    // Si el usuario está logeado
    if (this.state.user) {
      return (
        <div>
          <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <p>Hola {this.state.user.displayName}</p>
          <button onClick={this.handleLogout}>Salir</button>
        </div>
      );
    } else {
      return (
        // Si no lo está
      <button onClick={this.handleAuth}>Login con Google</button>
      )
    }
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.renderLoginButon()}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
