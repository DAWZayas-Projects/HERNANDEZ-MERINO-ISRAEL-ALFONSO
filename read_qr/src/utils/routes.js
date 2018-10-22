// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Main from '../pages/Main';
import Home from '../components/body/Home';
import Events from '../components/body/Events';
import Contact from '../components/body/Contact';

const AppRoutes = () => 
	<Main>
		<Switch>
			<Route exact path="/app" component={Home} />
			<Route exact path="/events" component={Events} />
			<Route exact path="/contact" component={Contact} />
		</Switch>
	</Main>;
export default AppRoutes;