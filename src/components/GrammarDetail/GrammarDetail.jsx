import React, { Component } from 'react';
import './gramdetail.css';
import Iframe from 'react-iframe';

class GrammarDetail extends Component {
	render() {
		const {item} = this.props.location.state;
		console.log(item);
		return (
			<div className="container">
				<div className="gram-wrap">
					<Iframe url="https://www.youtube.com/embed/GC4xwIK_FWY"
					width="560"
					height="315"
					frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
					display="initial"
					position="relative"/>
					<div className="gram-content">
						<h6>Tổng kết bài học: </h6>
						<p className="p-1" ><span  class="mr-2">1. Câu nghi vấn:</span> 
							{
								item.grammarContent.split(";")[0]
							}
							{/* 1. Đại từ nhân xưng: I, you, we, they, she, he, it <br/>
							2. Tính từ sở hữu: my, your, our, their, her, his, its <br/>
							3. Động từ tobe: I am . She/He/It is . You/We/They are */}
						</p>
						<p className="p-1"><span  class="mr-2">2. Câu khẳng định:</span> 
							{
								item.grammarContent.split(";")[1]
							}
						</p>
						<p className="p-1"><span class="mr-2">3. Câu phủ định:</span>
							{
								item.grammarContent.split(";")[2]
							}
						</p>
					</div>
				</div>
				<div className="detail-relate-to">
					<h6 id="relate-title">Bài học liên quan:</h6>
					<div className="detail-relate-to-body">
						<div className="card i2">
							<div className="card-body">
								<img src="https://thinhviendaminh.net/wp-content/uploads/2017/02/grammar.jpg" className="card-img-top" alt=""/>
								<div className="card-Title">Ngữ pháp tiếng anh cơ bản</div>
								<p className="card-text"> Đại từ nhân xưng và động từ tobe, tính từ sở hữu</p>
								<a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
							</div>
						</div>
						<div className="card i2">
							<div className="card-body">
								<img src="https://thinhviendaminh.net/wp-content/uploads/2017/02/grammar.jpg" className="card-img-top" alt=""/>
								<div className="card-Title">Ngữ pháp tiếng anh cơ bản</div>
								<p className="card-text"> Đại từ nhân xưng và động từ tobe, tính từ sở hữu</p>
								<a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
							</div>
						</div>
						<div className="card i2">
							<div className="card-body">
								<img src="https://thinhviendaminh.net/wp-content/uploads/2017/02/grammar.jpg" className="card-img-top" alt=""/>
								<div className="card-Title">Ngữ pháp tiếng anh cơ bản</div>
								<p className="card-text"> Đại từ nhân xưng và động từ tobe, tính từ sở hữu</p>
								<a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
							</div>
						</div>
						<div className="card i2">
							<div className="card-body">
								<img src="https://thinhviendaminh.net/wp-content/uploads/2017/02/grammar.jpg" className="card-img-top" alt=""/>
								<div className="card-Title">Ngữ pháp tiếng anh cơ bản</div>
								<p className="card-text"> Đại từ nhân xưng và động từ tobe, tính từ sở hữu</p>
								<a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default GrammarDetail;