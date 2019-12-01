import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ItemsTopic extends Component {
	render() {
		return (
			<div className="col-md-3">
				<div className="card">
					<div className="card-body">
						<div className="card-icon">
							<i className="fas fa-book"/>
						</div>
						<h3 className="card-Title">{this.props.topicName}</h3>
						<p className="card-Content">Hệ thống học từ vựng tiếng Anh</p>
						<hr className="hr-card"/>
						<Link className="card-link" to={`/DetailVoca/${this.props.topicName}`}>Học ngay</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ItemsTopic;