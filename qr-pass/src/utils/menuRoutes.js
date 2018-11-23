// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Container from '../containers/Main';
import Home from '../components/pages/Home';
import Events from '../components/pages/Events';
import Contact from '../components/pages/Contact';
import Target from '../components/pages/Target';


const MenuRoutes = () => 
	<Container>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/events" component={Events} />
			<Route exact path="/contact" component={Contact} />
			<Route path="/target/:token" component={Target} />
		</Switch>
	</Container>;
	
export default MenuRoutes;