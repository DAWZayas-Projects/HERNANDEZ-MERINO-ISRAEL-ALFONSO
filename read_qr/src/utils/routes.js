// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Container from '../components/Container';
import Home from '../components/main/Home';
import Events from '../components/main/Events';
import Contact from '../components/main/Contact';


const AppRoutes = () => 
	<Container>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/events" component={Events} />
			<Route exact path="/contact" component={Contact} />
		</Switch>
	</Container>;
	
export default AppRoutes;