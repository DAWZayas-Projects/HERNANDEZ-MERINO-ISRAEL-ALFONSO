// Dependencies
import React, { Component } from 'react';
// Data
import items from '../../data/events';
// Assets
import './css/Home.css';
import store from '../../stored/store';


class Home extends Component {

  constructor() {
    super();

    this.state = {
      user: null
    };

    store.subscribe(() => {
      this.setState({
        user: store.getState().user
      });
    });
    
  }

  render() {
 
    return (
      
      <div className="container py-4">
 
        <div className="modal fade" id="modalSubscriptionForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Subscribe</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body mx-3">

                <div className="md-form mb-2">
                  <label data-error="wrong" data-success="right" htmlFor="form1">Nombre Completo:</label>
                  <input type="text" id="form3" className="form-control validate"required/> 
                </div>
                <div className="md-form mb-2">
                  <label data-error="wrong" data-success="right" htmlFor="form2">Dirección:</label>
                  <input type="text" id="form2" className="form-control validate" required/>
                </div>
                <div className="md-form mb-2">
                  <label data-error="wrong" data-success="right" htmlFor="form3">Ciudad:</label>
                  <input type="text" id="form2" className="form-control validate" required/>
                </div>
                <div className="md-form mb-2">
                  <label data-error="wrong" data-success="right" htmlFor="form4">E-mail:</label>
                  <input type="email" id="form2" className="form-control validate" required/>
                </div>
                <div className="md-form mb-2">
                  <label data-error="wrong" data-success="right" htmlFor="form5">Telefono movil:</label>
                  <div className="input-group">
                    <span className="input-group-addon">+34</span>
                    <input type="number" id="form2" className="form-control validate" required/>
                  </div>
                </div>

              </div>
              <div className="modal-footer d-flex justify-content-center">
                  <button className="btn btn-indigo" >Enviar <i className="fa fa-paper-plane-o ml-1"></i></button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">

        { items && items.map((item, key) =>

          
         
          <div className="col-md-4" key={ key }>
            <div className="card bg-light mt-2 mb-2">
              <img className="card-img-top" src={ item.url } alt="" />
              <div className="card-body">
                <h4 className="card-title">{ item.title }</h4>
                <p className="card-text">{ item.text }</p>
                <a href="/" className="btn btn-primary" data-toggle="modal" data-target="#modalSubscriptionForm" >Ir a ...</a>
              </div>
            </div>
          </div>
   
        )}

        </div>
       </div>
    );
    
  }

}

export default Home;