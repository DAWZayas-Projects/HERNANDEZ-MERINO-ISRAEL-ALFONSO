// Dependencies
import React, { Component } from 'react';
// Firebase
import firebase from 'firebase/app';
import 'firebase/database';

class Target extends Component {

  constructor() {
    super();
    this.state = {
      target: ''
    }

  }
  componentDidMount() {
    const { match: {params}} = this.props;
    firebase.database().ref('/targets/'+ params.token +'/').once('value').then((snapshot) => {
      this.setState({ target: snapshot.val() })
    });
  }


  render() {

    return (
      <div>
        <h1>Target Page</h1>
        <p>{ this.state.target ? this.state.target.title : ''}</p>
      </div>
    );

  }

}

export default Target;