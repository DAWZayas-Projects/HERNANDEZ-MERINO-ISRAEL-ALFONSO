// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
//import 'firebase/firestore';
import firebaseApp from '../firebase/firebase';
// Components
import Header from '../components/layout/Header';
import ContentMenu from '../components/common/ContentMenu';
import Footer from '../components/layout/Footer';
// Data
import menu from '../data/menu';

class Container extends Component {

	static propTypes = {
		children: PropTypes.object.isRequired
  };

	constructor() {

		super();
		this.state = {
			user: null
		}
		// Bindeo de los this --> referenciar los objetos this
		this.handleLogout = this.handleLogout.bind(this);
		this.handleAuth = this.handleAuth.bind(this);
		
	}

	// Methods

	componentWillMount() {
		firebaseApp.auth().onAuthStateChanged(user => {
			this.setState({ user });
		})

	}

	// Functions //

	// función para logearte por Google
  handleAuth() { 
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.message}`));
  }
	// Desconectar
	handleLogout() {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.message}`));
	}


	render() {

		const { children } = this.props;

		return (
			<div>
				<Header 
					login={ this.handleAuth }
					logout={ this.handleLogout } 
					items={ menu } 
					user={ this.state.user }
				/>
				<ContentMenu 
					body={ children } 
				/>
				<Footer />
			</div>
		);
	}
}

export default Container;