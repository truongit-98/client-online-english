import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getlistDataVocabulary} from '../../store/Action/vocabulary_action';

class ListVocabulary extends Component {
	componentDidMount(){
		this.props.getlistDataVocabulary();
	}
	render() {
		const {listvocabulary} = this.props.vocabulary;
		return (
			<div className="vocabulary-wrap">
				<div className="vocabulary-item-title">
					<div className="container">
						<h2 className="Title-text">Danh sách tất cả các từ vựng - Online Engline</h2>
						<p className="Title-item-text">khóa học từ vựng tiếng Anh theo chủ đề, phù hợp cho mọi đối tượng</p>
					</div>
				</div>
				<div className="container body">
				<div className="row">
				{
					listvocabulary.map((value, key)  => (
						<div className="col-md-3 search" key={key} data-toggle="modal" data-target={"#model" + value.vocaID}>
							<div className="card">
								<div className="card-body">
									<div className="card-icon">
										<i className="fas fa-book"/>
									</div>
									<h3 className="card-Title">{value.word}</h3>
									<p className="card-Content">Hệ thống học từ vựng tiếng Anh</p>
									<hr className="hr-card"/>
									<div className="card-link">Xem chi tiết</div>
								</div>
							</div>
						</div>
						)
					)
				}
				</div>
			</div>
			{
				listvocabulary.map((value, key) => (
					<div className="modal fade" id={"model" + value.vocaID} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" key={key}>
						<div className="modal-dialog modal-dialog-centered" role="document">
							<div className="modal-content">
								<div className="modal-header">
								<h5 className="modal-title" id="exampleModalCenterTitle">Chi tiết từ vựng:</h5>
								</div>
								<div className="modal-body">
									<h6><span>Từ: </span>{value.word}</h6>
									<h6><span>Phiên âm: </span>{value.transcribe}</h6>
									<h6><span>Nghĩa: </span>{value.meanWord}</h6>
									<h6 onClick={this.onClickAudio}><span>pronounce: </span><i className="fas fa-volume-up ml-3"></i></h6>
								</div>
							</div>
						</div>
					</div>
				))
			}
		</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		vocabulary: state.vocabulary
	}
}
const mapDispatchToProps = {
	getlistDataVocabulary
}

export default connect(mapStateToProps, mapDispatchToProps)(ListVocabulary);