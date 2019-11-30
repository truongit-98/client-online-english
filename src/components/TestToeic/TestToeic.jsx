import React, { Component } from 'react';
import './TestToeic.css';
class TestToeic extends Component {
	render() {
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
						<div className="col-md-3 test">
							<div className="card">
								<div className="card-body">
									<div className="card-icon">
									<i className="fas fa-book-open"></i>
									</div>
									<h3 className="card-Title">Test</h3>
									<p className="card-Content i1"></p>
									<hr className="hr-card"/>
									<a className="card-link" href="/TestToeicDetail/">Test Ngay</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TestToeic;