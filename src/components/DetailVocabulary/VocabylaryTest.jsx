import React, { Component } from 'react';
import Swal from 'sweetalert2';

class VocabylaryTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }
  hanldeOnchenge = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
        [name] : value
    });
  }
  hanldeClick = (event) => {
    event.preventDefault();
    if(this.state.name === this.props.word){
      Swal.fire({
        position: 'top-end',
        title: 'Đáp án chính xác!',
        showConfirmButton: false,
        timer: 1500
      })

    }
    else{ 
      Swal.fire({
        position: 'top-end',
        title: 'Đáp án sai!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  onClickAudio = (event) => {
    event.preventDefault();
    var snd = new Audio(this.props.pronounce);
    snd.play();
  }
  render() {
    return (
      <div className="detail-body">
        <div className="detail-body-item">
          <h5>Gõ từ đúng theo gợi ý:</h5>
          <div id="test-item">
            <div className="goi-y"><span>Gợi ý 1:</span>{this.props.meanWord}</div>
            <div className="hint-sound">
              <span>Gợi ý 2:</span>
              <p>{this.props.transcribe}</p>
              <div onClick={(event) => this.onClickAudio(event)} className="volum">Pronounce:<i className="fas fa-volume-up ml-3"></i></div>
            </div>
          </div>
        </div>
        <div className="detail-body-item">
          <textarea name="name" id="" onChange={this.hanldeOnchenge} cols="40" rows="4" placeholder="Gõ đáp án của bạn vào đây."></textarea>
          <button type="button" className="btn btn-success" onClick={(event) =>this.hanldeClick(event)}>Kiểm tra</button>
        </div>
      </div>
    );
  }
}

export default VocabylaryTest;