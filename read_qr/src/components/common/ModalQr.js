// Dependencies
import React, { Component} from 'react';
import QRCode from 'qrcode.react';

class ModalQr extends Component {

  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ token: props.keyTarget })
  }

  render() {

    return (
      <div className="modal fade" id="modalImageQr" tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title">QR CODE</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center mt-3 mb-3">
            <QRCode value={"http://facebook.github.io/react/"} />
            </div>
            
          </div>
        </div>
      </div>
    )
  }

}

export default ModalQr