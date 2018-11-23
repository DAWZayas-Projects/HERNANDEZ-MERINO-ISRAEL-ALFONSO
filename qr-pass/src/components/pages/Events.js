// Dependencies
import React, { Component } from 'react';
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
      pass: null,
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

  updateKey(pass) {
    this.setState({ pass })
  }

  renderTargets() {
    if (this.state.targets) {
      return (
        <div className="row">
          { Object.values(this.state.targets).map((item, key) =>
            <div className="col-md-4" key={ key }>
            <figure className="snip1174 navy">
              <img src={ item.photoEvent } alt="sq-sample33" />
              <figcaption>
                <h2> { item.titleEvent } </h2>
                <p> 
                  { item.dateEvent } <br />
                  <b> { item.cityEvent } </b> 
                </p>
                <a href="/" className="btn btn-link" onClick={() => this.updateKey(item)} data-toggle="modal" data-target="#modalImageQr"> CODE QR </a>
              </figcaption>
            </figure>
          </div>
          )}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container py-4">
        <ModalQr passTarget={ this.state.pass } />
        { this.renderTargets() }
      </div>
    );

  }

}

export default Events;