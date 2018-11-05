// Dependencies
import React, { Component } from 'react';
// Data
import items from '../../data/events';
// Assets
import './css/Home.css';
import store from '../../stored/store';
//Common
import ModalForm from '../common/ModalForm';


class Home extends Component {

  constructor() {
    super();

    this.state = {
      user: null
    };

    store.subscribe(() => {
      this.setState({ user: store.getState().user });
    });

  }

  render() {
 
    return (
      <div className="container py-4">
         <div className="row">

          { items && items.map((item, key) =>

            <div className="col-md-4" key={ key }>
              <div className="card bg-light mt-2 mb-2">
                <img className="card-img-top" src={ item.url } alt="" />
                <div className="card-body">
                  <h4 className="card-title">{ item.title }</h4>
                  <p className="card-text">{ item.text }</p>
                  <button className="btn btn-primary" data-toggle="modal" data-target="#modalSubscriptionForm" >Ir a ...</button>
                </div>
              </div>
              <ModalForm 
                user={ this.state.user }
                title={ item.title }  
              />
            </div>
   
          )}

        </div>
      </div>
    );
    
  }

}

export default Home;