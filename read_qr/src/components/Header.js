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
          <img width="50" className="rounded-circle" src={ this.state.user.photoURL } alt={ this.state.user.displayName } />
          <p>Hola { this.state.user.displayName }</p>
        </div>
      );
    } 
	}
	
	render () {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<img className="Header-name-logo" src= { require('../images/appName.png') } alt="appName" width="120" />

          

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
					{ this.renderLogged() }
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="/">Inicio<span class="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">Mis Eventos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="/">Contacto</a>
							</li>
						</ul>
						<button className="btn btn-link" onClick={ this.handleLogout }>Salir</button>
					</div>
				</nav>
				
				
			</div>
		);
	}
}

export default Header;