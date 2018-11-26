// Dependencies
import React, { Component} from 'react';
import QRCode from 'qrcode.react';

class ModalQr extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillReceiveProps(props) {
    if (props.passCard) {
      this.setState({ 
          token: props.passCard.key,
          userName: props.passCard.fullName ,
          titleEvent: props.passCard.titleEvent,
          hourEvent: props.passCard.hourEvent
      });
    }
  }

  render() {

    return (
      <div className="modal fade" id="modalImageQr" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
            <h5 className="modal-title"> <i className="fa fa-user mr-2" /> { this.state.userName} </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center mt-2 mb-3">
              <QRCode value={"https://final-app-dd7be.firebaseapp.com/card/"+this.state.token} size={250} />
              <div>
                <p>
                  <span className="title-event text-primary"> { this.state.titleEvent } </span> <br />
                  <span> <b> Hora: </b> { this.state.hourEvent } </span>
                </p>
                <button type="button" className="btn btn-info">Descargar</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }

}

export default ModalQr