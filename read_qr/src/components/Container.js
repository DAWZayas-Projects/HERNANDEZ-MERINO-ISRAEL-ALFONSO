// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Assets
import firebase from 'firebase';
// Components
import Header from './layout/Header';
import ContentMenu from './common/ContentMenu';
import Footer from './layout/Footer';
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
	}

	// Functions //

	// Desconectar
	handleLogout () {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.message}`));
	}


	render() {

		const { children } = this.props;

		return (
			<div>
				<Header 
					isLogout={ this.handleLogout } 
	        items={ menu } 
				/>
				<ContentMenu body={ children } />
				<Footer />
			</div>
		);
	}
}

export default Container;