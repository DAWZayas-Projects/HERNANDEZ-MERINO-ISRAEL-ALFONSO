// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
// Assets
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import firebaseApp from './firebase/firebase';
import history from './utils/history';
// Pages
import Login from './landing/Login';
import App from './route/App';

firebaseApp.auth().onAuthStateChanged(user => {
  
  if (user) {
    console.log('Conected...');
    localStorage.setItem('userName', user.displayName);
    localStorage.setItem('userPhoto', user.photoURL);
    history.push("/");
  } else {
    console.log('Disconnected...');
    localStorage.removeItem('userName');
    localStorage.removeItem('userPhoto');
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
