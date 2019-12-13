import React, { Component } from 'react';
import {withRouter,Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {getDataGrammarDetail} from '../../store/Action/grammarAction';

class GrammarItem extends Component {
	onClickDetail = (e) => {
		e.preventDefault();
		this.props.getDataGrammarDetail(this.props.history, this.props.topicGrammarID)
	}
	render() {
		return (
			<div className="card i2">
				<div className="card-body">
					<img src="https://thinhviendaminh.net/wp-content/uploads/2017/02/grammar.jpg" className="card-img-top" alt=""/>
					<div className="card-Title">Ngữ pháp tiếng anh cơ bản</div>
					<p className="card-text">{this.props.topicGrammarContent}</p>
					<Link to={`/grammarDetail/getAll?grammarID=${this.props.topicGrammarID}`} onClick={this.onClickDetail} className="btn btn-primary">Xem ngay</Link>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
	
	}
}
const mapDispatchToProps = {
	getDataGrammarDetail
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GrammarItem));
