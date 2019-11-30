import React, { Component } from 'react';
import './DetailVoca.css';
import Slider from "react-slick";
class DetailVoca extends Component {
	hanldeClick = (event) => {
		event.preventDefault();
		console.log("kết quả xử lý ở đây");
	}
	onClickAudio = (event) => {
		event.preventDefault();
		var snd = new Audio("/assets/mp3/1mp3.mp3");
  	snd.play();
	}
	render() {
		const settings = {
			dots: true,
      infinite: false,
      speed: 500,
      arrows: true,
      lazyLoad: true
    };
		return (
			<div className="detail-voca-wrap">
				<div className="container detail-voca">
					<div className="caurse-content">
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<a className="nav-link active" data-toggle="tab" href="#hoc-tu-vung">Học Từ vựng</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#kiem-tra">Kiểm Tra</a>
							</li>
						</ul>
						<div className="tab-content i1">
							<div className="tab-pane container active" id="hoc-tu-vung">
								<Slider {...settings}>
									<div className="detail-body i1">
										<div className="detail-body-item i1">
											<h5>Vocabulary:</h5>
											<h5>Chủ đề: JOB</h5>
											<div className="goi-y i1"><span>Từ vựng:</span>accountant</div>
											<div className="goi-y i1"><span>Nghĩa của từ:</span>kế toán viên</div>
											<div className="hint-sound i1">
												<span>Phát âm:</span>
												<p>/əˈkaʊntnt/</p>
												<div onClick={(event) => this.onClickAudio(event)} className="volum i1"><i className="fas fa-volume-up"></i></div>
											</div>
										</div>
									</div>
									<div className="detail-body i1">
										<div className="detail-body-item i1">
											<h5>Vocabulary:</h5>
											<h5>Chủ đề: JOB</h5>
											<div className="goi-y i1"><span>Từ vựng:</span>accountant</div>
											<div className="goi-y i1"><span>Nghĩa của từ:</span>kế toán viên</div>
											<div className="hint-sound i1">
												<span>Phát âm:</span>
												<p>/əˈkaʊntnt/</p>
												<div onClick={(event) => this.onClickAudio(event)} className="volum i1"><i className="fas fa-volume-up"></i></div>
											</div>
										</div>
									</div>
									<div className="detail-body i1">
										<div className="detail-body-item i1">
											<h5>Vocabulary:</h5>
											<h5>Chủ đề: JOB</h5>
											<div className="goi-y i1"><span>Từ vựng:</span>accountant</div>
											<div className="goi-y i1"><span>Nghĩa của từ:</span>kế toán viên</div>
											<div className="hint-sound i1">
												<span>Phát âm:</span>
												<p>/əˈkaʊntnt/</p>
												<div onClick={(event) => this.onClickAudio(event)} className="volum i1"><i className="fas fa-volume-up"></i></div>
											</div>
										</div>
									</div>
								</Slider>
							</div>
							<div className="tab-pane container fade" id="kiem-tra">
							<Slider {...settings}>
									<div className="detail-body">
										<div className="detail-body-item">
											<h5>Gõ từ đúng theo gợi ý:</h5>
											<div className="goi-y"><span>Gợi ý 1:</span>kế toán viên</div>
											<div className="hint-sound">
												<span>Gợi ý 2:</span>
												<p>/əˈkaʊntnt/</p>
												<div onClick={(event) => this.onClickAudio(event)} className="volum"><i className="fas fa-volume-up"></i></div>
											</div>
										</div>
										<div className="detail-body-item">
											<textarea name="" id="" cols="40" rows="4" placeholder="Gõ đáp án của bạn vào đây."></textarea>
											<button type="button" className="btn btn-success" onClick={(event) =>this.hanldeClick(event)}>Kiểm tra</button>
										</div>
									</div>
									<div className="detail-body">
										<div className="detail-body-item">
											<h5>Gõ từ đúng theo gợi ý:</h5>
											<div className="goi-y"><span>Gợi ý 1:</span>kế toán viên</div>
											<div className="hint-sound">
												<span>Gợi ý 2:</span>
												<p>/əˈkaʊntnt/</p>
												<div onClick={(event) => this.onClickAudio(event)} className="volum"><i className="fas fa-volume-up"></i></div>
											</div>
										</div>
										<div className="detail-body-item">
											<textarea name=""  id="" cols="40" rows="4" placeholder="Gõ đáp án của bạn vào đây."></textarea>
											<button type="button" className="btn btn-success" onClick={(event) =>this.hanldeClick(event)}>Kiểm tra</button>
										</div>
									</div>
									<div className="detail-body">
										<div className="detail-body-item">
											<h5>Gõ từ đúng theo gợi ý:</h5>
											<p><span>Gợi ý 1:</span>kế toán viên</p>
											<div className="hint-sound">
												<span>Gợi ý 2:</span>
												<p>/əˈkaʊntnt/</p>
												<div onClick={(event) => this.onClickAudio(event)} className="volum"><i className="fas fa-volume-up"></i></div>
											</div>
										</div>
										<div className="detail-body-item">
											<textarea name="" id="" cols="40" rows="4" placeholder="Gõ đáp án của bạn vào đây."></textarea>
											<button type="button" className="btn btn-success" onClick={(event) =>this.hanldeClick(event)}>Kiểm tra</button>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DetailVoca;