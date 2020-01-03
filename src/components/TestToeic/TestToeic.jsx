import React, { Component } from 'react';
import './TestToeic.css';
import { fetchToeicRequet } from '../../store/Action/toeic';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class TestToeic extends Component {
	componentDidMount(){
		this.props.fetchToeicRequet();
	}
	render() {
		const {toeics} = this.props.toeic;
		return (
			<div className="vocabulary-wrap">
				<div className="vocabulary-item-title">
					<div className="container">
						<h2 className="Title-text">Test tiếng annh - Online Engline</h2>
						<p className="Title-item-text">Hệ thống bài học tiếng Anh được ONLINE ENGLINE xây dựng theo lộ trình <br/> và chuẩn quốc tế.</p>
					</div>
				</div>
				<div className="container body">
					<div className="row">
						{
							toeics.map((value, key) => {
								return (
									<div className="col-md-3 test" key={key}>
										<div className="card">
											<div className="card-body">
												<div className="card-icon">
												<i className="fas fa-book-open"></i>
												</div>
												<h3 className="card-Title">Test</h3>
												<p className="card-Content i1">{value.createdBy}</p>
												<hr className="hr-card"/>
												<Link className="card-link" to={`/TestToeicDetail/${value.examID}`}>Test Ngay</Link>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		toeic: state.toeic
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		fetchToeicRequet: bindActionCreators(fetchToeicRequet, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TestToeic);