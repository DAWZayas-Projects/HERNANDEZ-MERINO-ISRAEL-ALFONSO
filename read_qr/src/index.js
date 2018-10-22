// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
// Assets
import './index.css';
import firebaseApp from './firebase/firebase';
import registerServiceWorker from './registerServiceWorker';
// Pages
import App from './App';
import Login from './pages/Login';

// Firebase
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Conected...');
    browserHistory.push('/app');
  } else {
    console.log('Disconnected...');
    browserHistory.replace('/login');
  }

})


ReactDOM.render(
  <Router path="/" history={browserHistory}>
    <Route path="/app" component={App} />
    <Route path="/login" component={Login} />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
