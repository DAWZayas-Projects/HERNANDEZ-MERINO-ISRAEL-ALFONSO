// Dependencies
import React, { Component } from 'react';
// Assets
import store from '../../stored/store';
// Firebase
import firebase from 'firebase/app';
import 'firebase/database';

class Events extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
      targets: null
    };

  }

  // Methods //
  // Aquí es donde podemos manejar el componente ya renderizado y actualizado en el DOM.
  componentDidUpdate() {
    firebase.database().ref('/registered/'+ this.state.user.uid +'/').once('value').then((snapshot) => {
      this.setState({ targets: snapshot.val() });
    }); 
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ user: store.getState().user });
    });
  }

  // Functions //

  renderTargets() {
    if (this.state.targets) {
      return (
        <div className="row">
          { Object.values(this.state.targets).map((item, key) =>
            <div className="col-md-12" key={ key }>
            <figure className="snip1174 navy col-md-4">
              <img src={ item.urlPhoto } alt="sq-sample33" />
              <figcaption>
                <h2> { item.title } </h2>
                <p> 
                  { item.date } <br />
                  <b> { item.city } </b> 
                </p>
                <a href="/target">Entrar</a>
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
        { this.renderTargets() }
      </div>
    );

  }

}

export default Events;