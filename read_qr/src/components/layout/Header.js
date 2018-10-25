// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Assets
import './css/Header.css';

class Header extends Component {

	static propTypes = {
		items: PropTypes.array.isRequired
	};

	constructor() {
		super();
		this.state = {
			user: null
		}
	}

	// Methods
	componentWillReceiveProps(props) {
		this.setState({ user : props.user })
	}

	// Functions //

	// Si el usuario está logeado
	renderLogged() {
		if (this.state.user) {	
			return (
				<div>
					<div className="row d-lg-none">
						<img 
							className="rounded-circle ml-3 mr-3 mt-1" 
							width="45" 
							height="45" 
							src={ this.state.user.photoURL } 
							alt={ this.state.user.displayName } 
						/>
						<p className="text-white mt-3">{ this.state.user.displayName }</p>
					</div>
					<div className="dropdown-divider"></div>
				</div>
			);
		}
	}

	renderButtonsLogged() {
			if (this.state.user) {	
				return (
					<div className="row col-xs-auto info-logged">
						<div className="display-name">
							<i className="fas fa-user mr-1" /> { this.state.user.displayName } 
						</div>
						<button className="btn btn-link button-logged" onClick={ this.props.logout }> Salir </button>
					</div>
				)
			} else {
				return ( 
					<div className="row col-xs-auto info-logged">
						<button className="btn btn-link button-logged" onClick={ this.props.login }> Auth Google </button>
					</div>
				);
			} 
	}
	

	render() {

		const { items } = this.props;
		
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

					<img 
						className="name-logo"
						width="120" 
						src= { require('../../images/appNameWhite.png') } 
						alt="appName" 
					/>
					<button 
						className="navbar-toggler" 
						type="button" 
						data-toggle="collapse" 
						data-target="#navbarNav" 
						aria-controls="navbarNav" 
						aria-expanded="false" 
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarNav">

						<div className="dropdown-divider mt-2"></div>
							{ this.renderLogged() }
		
						<ul className="navbar-nav">

							{ items && items.map((item, key) => 
									<li className="nav-item" key={ key }>
										<Link className="nav-link text-white" to={ item.url }> { item.title } </Link>
									</li>
							)}

						</ul>
						<div className="col-sm-10 text-center">
							{	this.renderButtonsLogged() }
						</div>

					</div>

				</nav>
			</div>
		);

	}

}

export default Header;