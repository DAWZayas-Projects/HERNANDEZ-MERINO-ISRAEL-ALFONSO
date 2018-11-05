// Dependencies
import React, { Component} from 'react';
// Firebase
import firebase from 'firebase/app';
import 'firebase/database';

class ModalForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      uid: '',
      fullName: '',
      direccion: '',
      country: '',
      email: '',
      telf: '',
      date: ''
    }
    
    this.handleChange = this.handleChange.bind(this);

  }

  // Methods

  componentDidMount() {
    (function() {
      window.addEventListener('load', function() {
        // Obtenga todos los formularios a los que queremos aplicar estilos personalizados de validación de Bootstrap
        var forms = document.getElementsByClassName('needs-validation');
        // Pasa sobre ellos y evita la sumisión.
        Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
  }
	
	componentWillReceiveProps (props) {
		this.setState({ 
      isLogin: props.user ? true : false,
      uid: props.user ? props.user.uid : '',
      fullName : props.user ? props.user.displayName : '',
      email: props.user ? props.user.email : ''
    });
  }

  // Functions //

  handleChange = (e) => {
    e.preventDefault();
    
    this.setState({
      fullName: this.refs.fullName.value,
      direccion: this.refs.direccion.value,
      country: this.refs.country.value,
      email: this.refs.email.value,
      telf: this.refs.telf.value
    })
  }

  handleEvents = (e) => {
    e.preventDefault();
    
    if (this.state.isLogin) {
      console.log('Saving in firebase...');

      const data = {
        category: 'Musica',
        urlPhoto: '',
        fullName: this.state.fullName,
        direccion: this.state.direccion,
        country: this.state.country,
        email: this.state.email,
        telf: this.state.telf,
        date: new Date().toJSON().slice(0,10)
      }

      const dbRef = firebase.database().ref('registered/'+ this.state.uid +'/');
      const newEvent = dbRef.push();
      newEvent.set(data);
    }

  }
  

  render() {
    
    return (

      <div className="modal fade" id="modalSubscriptionForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">{ this.props.title }</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <form className="needs-validation" noValidate>
              <div className="modal-body mx-3">

                <div className="md-form mb-2">
                  <label htmlFor="validationServer01" >Nombre Completo:</label>
                  <input type="text" ref="fullName" className="form-control validate" id="validationCustom01" value={ this.state.fullName } onChange={ this.handleChange } disabled={this.state.isLogin} /> 
                </div>
                <div className="md-form mb-2">
                  <label htmlFor="validationCustom02" >Dirección:</label>
                  <input type="text" ref="direccion" className="form-control validate" id="validationCustom02" value={ this.state.direccion } onChange={ this.handleChange } required/>
                  <div className="invalid-feedback">
                    Por favor ingresa tu dirección.
                  </div>
                </div>
                <div className="md-form mb-2">
                  <label data-error="wrong" data-success="right" >Ciudad:</label>
                  <input type="text" ref="country" className="form-control validate" value={ this.state.country } onChange={ this.handleChange } />
                </div>
                <div className="md-form mb-2">
                  <label data-error="wrong" data-success="right" >E-mail:</label>
                  <input type="email" ref="email" className="form-control validate" value={ this.state.email } onChange={ this.handleChange } disabled={this.state.isLogin} />
                </div>
                <div className="md-form mb-2">
                  <label data-error="wrong" data-success="right" >Telefono movil:</label>
                  <div className="input-group">
                    <span className="input-group-addon">+34</span>
                    <input type="number" ref="telf" className="form-control validate" value={ this.state.telf } onChange={ this.handleChange } />
                  </div>
                </div>

                <div className="modal-footer d-flex justify-content-center">
                  <button type="submit" className="btn btn-indigo"  >Enviar <i className="fa fa-paper-plane-o ml-1" ></i></button>
                </div>
              
              </div>
            </form>

          </div>
        </div>
      </div>

    );

  }

}

export default ModalForm;