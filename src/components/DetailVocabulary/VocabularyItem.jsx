import React, { Component } from 'react';

class VocabularyItem extends Component {
	onClickAudio = (event) => {
		event.preventDefault();
		var snd = new Audio(this.props.pronounce);
  	snd.play();
	}
	render() {
		return (
			<div className="detail-body i1">
				<div className="detail-body-item i1">
					<h5>Vocabulary:</h5>
					<div id="item">
						<div className="goi-y i1"><span>Từ vựng:</span>{this.props.word}</div>
						<div className="goi-y i1"><span>Nghĩa của từ:</span>{this.props.meanWord}</div>
						<div className="hint-sound i1">
							<span>Phát âm:</span>
							<p>{this.props.transcribe}</p>
							<div onClick={(event) => this.onClickAudio(event)} className="volum i1">Pronounce:<i className="fas fa-volume-up ml-3"></i></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default VocabularyItem;