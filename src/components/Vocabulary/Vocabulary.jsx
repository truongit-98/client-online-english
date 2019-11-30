import React, { Component } from 'react';
import './Vocabulary.css';
class Vocabulary extends Component {
	render() {
		return (
			<div className="vocabulary-wrap">
				<div className="vocabulary-item-title">
					<div className="container">
						<h2 className="Title-text">Học từ vựng tiếng Anh - Online Engline</h2>
						<p className="Title-item-text">Gồm 100+ khóa học từ vựng tiếng Anh theo chủ đề, phù hợp cho mọi đối tượng</p>
					</div>
				</div>
				<div className="container body">
					<div className="row">
						<div className="col-md-3">
							<div className="card">
								<div className="card-body">
									<div className="card-icon">
										<i className="fas fa-book"/>
									</div>
									<h3 className="card-Title">JOB</h3>
									<p className="card-Content">Hệ thống học từ vựng tiếng Anh</p>
									<hr className="hr-card"/>
									<a className="card-link" href="/DetailVocabulary/">Học ngay</a>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="card">
								<div className="card-body">
									<div className="card-icon">
										<i className="fas fa-book"/>
									</div>
									<h3 className="card-Title">LOVE</h3>
									<p className="card-Content">Hệ thống học ngữ pháp tiếng Anh</p>
									<hr className="hr-card"/>
									<a className="card-link" href="/">Học ngay</a>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="card">
								<div className="card-body">
									<div className="card-icon">
										<i className="fas fa-book"/>
									</div>
									<h3 className="card-Title">PLACE AROUND TOWN</h3>
									<p className="card-Content">Hệ thống luyện nghe tiếng Anh</p>
									<hr className="hr-card"/>
									<a className="card-link" href="/">Học ngay</a>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="card">
								<div className="card-body">
									<div className="card-icon">
										<i className="fas fa-book"/>
									</div>
									<h3 className="card-Title">HOLIDAYS</h3>
									<p className="card-Content">Hệ thống học phát âm tiếng Anh</p>
									<hr className="hr-card"/>
									<a className="card-link" href="/">Học ngay</a>
								</div>
							</div>
						</div>
						<div className="col-md-3">
							<div className="card">
								<div className="card-body">
									<div className="card-icon">
										<i className="fas fa-book"/>
									</div>
									<h3 className="card-Title">BÀI KIỂM TRA TỔNG KẾT</h3>
									<p className="card-Content">Hệ thống học phát âm tiếng Anh</p>
									<hr className="hr-card"/>
									<a className="card-link" href="/">Học ngay</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Vocabulary;