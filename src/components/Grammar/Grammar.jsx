import React, { Component } from 'react';
import { connect } from 'react-redux';
import GrammarItem from './GrammarItem';

class Grammar extends Component {
	render() {
		console.log(this.props.match);
		
		const {grammarIteam} = this.props.grammar;
		return (
			<div className="vocabulary-wrap">
				<div className="vocabulary-item-title">
					<div className="container">
						<h2 className="Title-text">Học ngữ pháp tiếng Anh - Online Engline</h2>
						<p className="Title-item-text">Gồm các khóa học ngữ pháp tiếng Anh theo chủ đề <br/> được xây dựng dựa trên tiêu chuẩn quốc tế</p>
					</div>
				</div>
				<div className="container body">
				<div className="card-wrap">
					{
						grammarIteam.map((value, key) => 
							<GrammarItem key={key} {...value}/>
						)
					}
				</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		grammar: state.grammar
	}
}

export default connect(mapStateToProps)(Grammar);