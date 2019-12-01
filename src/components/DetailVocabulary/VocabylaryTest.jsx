import React, { Component } from 'react';

class VocabylaryTest extends Component {
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
          <textarea name="" id="" cols="40" rows="4" placeholder="Gõ đáp án của bạn vào đây."></textarea>
          <button type="button" className="btn btn-success" onClick={(event) =>this.hanldeClick(event)}>Kiểm tra</button>
        </div>
      </div>
    );
  }
}

export default VocabylaryTest;