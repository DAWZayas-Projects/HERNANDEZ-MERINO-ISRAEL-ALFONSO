// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Container from '../containers/Main';
import Home from '../components/pages/Home';
import Events from '../components/pages/Events';
import Contact from '../components/pages/Contact';


const MenuRoutes = () => 
	<Container>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/events" component={Events} />
			<Route exact path="/contact" component={Contact} />
		</Switch>
	</Container>;
	
export default MenuRoutes;