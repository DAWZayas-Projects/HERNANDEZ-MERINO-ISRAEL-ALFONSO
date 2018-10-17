// Dependencies
import React, { Component } from 'react';

// Assets
import './css/Global.css';
import firebase from 'firebase';
import firebaseApp from '../firebase';

// Components

class Header extends Component {

	constructor () {
		super();
		this.state = {
			user: null
		}
		
		
		this.handleLogout = this.handleLogout.bind(this);
	}

	componentDidMount () {
    firebaseApp.auth().onAuthStateChanged(user => {
			this.setState({user});
			console.log(this.state.user);
    })
	}
	
	handleLogout () {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.message}`));
	}

	renderLogged () {
    // Si el usuario está logeado
    if (this.state.user) {
      return (
        <div>
          <img width="100" src={ this.state.user.photoURL } alt={ this.state.user.displayName } />
          <p>Hola { this.state.user.displayName }</p>
        </div>
      );
    } 
	}
	
	render () {
		return (
			<div>
				<div>
          { this.renderLogged() }
        </div>
				<button onClick={ this.handleLogout }>Salir</button>
			</div>
		);
	}
}

export default Header;