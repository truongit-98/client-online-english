import React, { Component } from 'react';
import './DetailVoca.css';
import Slider from "react-slick";
import { connect } from 'react-redux';
import {getThemeVocabulary} from '../../store/Action/vocabulary_action';
import VocabularyItem from './VocabularyItem';
import VocabylaryTest from './VocabylaryTest';

class DetailVoca extends Component {
	componentDidMount(){
		this.props.getThemeVocabulary(this.props.match.params.topicName);
	}
	hanldeClick = (event) => {
		event.preventDefault();
		console.log("kết quả xử lý ở đây");
	}
	render() {
		const {vocabularyItem} = this.props.vocabulary;
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
									{
										vocabularyItem.map((value, key) => 
										<VocabularyItem key={key} {...value}></VocabularyItem>
										)
									}
								</Slider>
							</div>
							<div className="tab-pane container fade" id="kiem-tra">
							<Slider {...settings}>
								{
									vocabularyItem.map((value, key) => 
										<VocabylaryTest key={key} {...value}></VocabylaryTest>
									)
								}
							</Slider>
							</div>
						</div>
					</div>
				</div>
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
	getThemeVocabulary
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailVoca);