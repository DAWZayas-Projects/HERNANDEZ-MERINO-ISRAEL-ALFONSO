// Dependecies
import React, { Component } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
// Assets
import MenuRoutes from './utils/menuRoutes';


class App extends Component {

  render () {
    return (
      <Route>
        <MenuRoutes />
      </Route>
    );
  }

}

export default App;