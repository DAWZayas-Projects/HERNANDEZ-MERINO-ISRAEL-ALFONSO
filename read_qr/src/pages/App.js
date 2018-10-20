// Dependencies
import React, { Component } from 'react';
// Assets
import firebase from 'firebase';
import firebaseApp from '../firebase';
// Components
import Header from '../components/Header';

class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			user: null
		}
		// Bindeo de los this --> referenciar los objetos this
		this.handleLogout = this.handleLogout.bind(this);
		this.getUserFirebase = this.getUserFirebase.bind(this);
	}

	// Methods //

	// Se ejecuta justo después de que el componente haya sido montado en el DOM.
	componentDidMount () { 
		this.getUserFirebase()
	}
	// Se ejecuta justo antes de que el componente sea destruido o eliminado del DOM.
	componentWillUnmount () {
		
	}

	// Functions //

	// Obtener datos del Usuario
	getUserFirebase () {
		this.ref = firebaseApp.auth().onAuthStateChanged(user => {
			this.setState({ user });
		})
	}
	// Desconectar
	handleLogout () {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.message}`));
	}


	render () {
		return (
			<div>
				<Header isLogout={ this.handleLogout } isUser={ this.state.user } />
			</div>
		);
	}
}

export default App;