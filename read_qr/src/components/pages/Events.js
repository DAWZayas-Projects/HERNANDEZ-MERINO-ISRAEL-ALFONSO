// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Firebase
import firebase from 'firebase/app';
import 'firebase/database';
// Common
import ModalQr from '../common/ModalQr';

class Events extends Component {

  constructor(props) {
    super(props);

    this.state = {
      uid: localStorage.getItem('uid'),
      key: '',
      targets: null
    };

  }

  // Methods //

  componentWillMount() {

    firebase.database().ref('/registered/'+ this.state.uid +'/').once('value').then((snapshot) => {
      this.setState({ targets: snapshot.val() });
    }); 

  }

  // Functions //

  updateKey(key) {
    this.setState({ key })
  }

  renderTargets() {
    if (this.state.targets) {
      return (
        <div className="row">
          { Object.values(this.state.targets).map((item, key) =>
            <div className="col-md-4" key={ key }>
            <figure className="snip1174 navy">
              <img src={ item.urlPhoto } alt="sq-sample33" />
              <figcaption>
                <h2> { item.title } </h2>
                <p> 
                  { item.date } <br />
                  <b> { item.city } </b> 
                </p>
                <a href="/" className="btn btn-link" onClick={() => this.updateKey(item.key)} data-toggle="modal" data-target="#modalImageQr"> CODE QR </a>
              </figcaption>
            </figure>
            <Link to={"/target/"+ item.key}>Entrar</Link>
          </div>
          )}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container py-4">
        <ModalQr keyTarget={ this.state.key } />
        { this.renderTargets() }
      </div>
    );

  }

}

export default Events;