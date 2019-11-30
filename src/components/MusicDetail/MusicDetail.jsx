import React, { Component } from 'react';
import './MusicDetail.css';
import Iframe from 'react-iframe'
class MusicDetail extends Component {
	render() {
		return (
			<div className="container">
				<div className="music-video">
					<Iframe url="https://www.youtube-nocookie.com/embed/gU5qjzCjcrY"
					width="560"
					height="315"
					id="myId"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
					allowfullscreen
					frameborder="0"
					className="myClassname"
					display="initial"
					position="relative"/>
					<div className="music-contet">
						<h6>Lời bài hát:</h6>
						<p>
						Anywhere you are, I am near
						Anywhere you go, I'll be there
						Anytime you whisper my name, you'll see
						How every single promise I'll keep
						'Cause what kind of guy would I be
						If I was to leave when you need me most
						What are words
						If you really don't mean them
						When you say them
						What are words
						If they're only for good times
						Then they don't
						When it's love
						Yeah, you say them out loud those words
						They never go away
						They live on, even when we're gone
						And I know an angel was sent, just for me
						And I know I'm meant, to be where I am
						And I'm gonna be
						Standing right beside her tonight
						And I'm gonna be by your side
						I would never leave when she needs me most
						What are words
						If you really don't mean them
						When you say them
						What are words
						If they're only for good times
						Then they don't
						When…
						</p>
					</div>
				</div>
				<div className="detail-relate-to">
					<h6 id="relate-title">Bài hát liên quan:</h6>
					<div className="detail-relate-to-body">
						<div className="card i2">
							<div className="card-body">
								<img src="/assets/img/1.PNG" className="card-img-top" alt=""/>
								<div className="card-Title">Bài hát</div>
								<p className="card-text">Cơn mưa ngang qua</p>
								<a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
							</div>
						</div>
						<div className="card i2">
							<div className="card-body">
								<img src="/assets/img/1.PNG" className="card-img-top" alt=""/>
								<div className="card-Title">Bài hát</div>
								<p className="card-text">Cơn mưa ngang qua</p>
								<a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
							</div>
						</div>
						<div className="card i2">
							<div className="card-body">
								<img src="/assets/img/1.PNG" className="card-img-top" alt=""/>
								<div className="card-Title">Bài hát</div>
								<p className="card-text">Cơn mưa ngang qua</p>
								<a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
							</div>
						</div>
						<div className="card i2">
							<div className="card-body">
								<img src="/assets/img/1.PNG" className="card-img-top" alt=""/>
								<div className="card-Title">Bài hát</div>
								<p className="card-text">Cơn mưa ngang qua</p>
								<a href="/grammarDetail/" className="btn btn-primary">Xem ngay</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MusicDetail;