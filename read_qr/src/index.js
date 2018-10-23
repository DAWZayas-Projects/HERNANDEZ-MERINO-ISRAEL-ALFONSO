// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
// Assets
import './index.css';
import firebaseApp from './firebase/firebase';
import registerServiceWorker from './utils/registerServiceWorker';
import history from './utils/history';
// Pages
import App from './App';
import Login from './pages/Login';

// Firebase
firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Conected...');
    history.push("/");
  } else {
    console.log('Disconnected...');
    history.replace('/login');
  }

})


ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
