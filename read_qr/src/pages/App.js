// Dependencies
import React, { Component } from 'react';

// Assets
import './css/Global.css';

// Components
import Header from '../components/Header';

class App extends Component {

	constructor () {
		super();
		this.state = {
			user: null
		}
		console.log(this.state.user);
		
	}

	render () {
		return (
			<div>
				<Header />
				<h1>BODY</h1>
			</div>
		);
	}
}

export default App;