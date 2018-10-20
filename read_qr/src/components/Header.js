// Dependencies
import React, { Component } from 'react';
// Assets
import './css/Global.css';

class Header extends Component {

	constructor () {
		super();
		this.state = {
			user: null
		}
	}

	// Methods //

	// Se ejecutará una vez se monte el componente.
	componentWillReceiveProps(nextProps) {	
		this.setState({ user: nextProps.isUser })
	}

	// Functions //

	// Si el usuario está logeado
	renderLogged () {
		if (this.state.user) {	
		return (
			<div className="row d-lg-none">
			<img className="rounded-circle ml-3 mr-3 mt-1" width="50" height="50" src={ this.state.user.photoURL } alt={ this.state.user.displayName } />
			<p className="text-white mt-3">Hola { this.state.user.displayName }</p>
			</div>
		);
		} 
	}
	

	render () {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<img className="name-logo" src= { require('../images/appNameWhite.png') } alt="appName" width="120" />
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">

						<div className="dropdown-divider mt-2"></div>
						{ this.renderLogged() }
						<div className="dropdown-divider"></div>

						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link text-white" href="/">Inicio<span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="/">Eventos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="/">Contacto</a>
							</li>
						</ul>
						<div className="col-sm-10 text-center">
							<button className="btn btn-link button-logout" onClick={ this.props.isLogout }>Salir</button>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;