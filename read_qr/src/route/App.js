// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
// Assets
import AppRoutes from '../utils/routes';


class App extends Component {

  render() {
    return (
      <Route>
        <AppRoutes />
      </Route>
    );
  }

}

export default App;