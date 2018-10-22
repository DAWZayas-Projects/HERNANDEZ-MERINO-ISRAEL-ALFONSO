// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from '../pages/App';
import Home from '../components/body/Home';
import Events from '../components/body/Events';
import Contact from '../components/body/Contact';

const AppRoutes = () => 
	<App>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/events" component={Events} />
			<Route exact path="/contact" component={Contact} />
		</Switch>
	</App>;
export default AppRoutes;