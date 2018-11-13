// Dependencies
import React, { Component } from 'react';
// Assets
import './css/Events.css';


class Events extends Component {

  render() {

    return (
      <div className="container">
        <h1>Events Page</h1>
        <div className="col-md">        
          <div className="card text-center">
            <div className="card-body">
              <h4 className="card-title">Titulo de la tarjeta</h4>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus sem, 
                                    tempor vitae mattis malesuada, ornare sed erat. Pellentesque nulla dui, congue
                                    nec tortor sit amet, maximus mattis dui. </p>
   
            </div>
            <div className="card-footer">
              <a href="/" className="btn btn-primary">Entrar</a>
            </div>
          </div>          
      </div>
      </div>
    );

  }

}

export default Events;