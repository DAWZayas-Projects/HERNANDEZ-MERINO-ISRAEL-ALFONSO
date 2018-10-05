import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './pages/App';

firebase.initializeApp({
	apiKey: "AIzaSyCWhuFCmlqytIbqp1csyGAcgzk7cmQucq4",
	authDomain: "final-app-866bc.firebaseapp.com",
	databaseURL: "https://final-app-866bc.firebaseio.com",
	projectId: "final-app-866bc",
	storageBucket: "final-app-866bc.appspot.com",
	messagingSenderId: "275512127265"
});

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

