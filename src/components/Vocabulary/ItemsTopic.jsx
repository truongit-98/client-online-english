import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class ItemsTopic extends Component {

  render() {
    const {isAuthenticated} = this.props.auth;
    const authLinks = (
      <Link className="card-link" to={`/DetailVoca/${this.props.topicName}`}>Học ngay</Link>
    );
    const guestLinks = (
      <Link className="card-link" to={`/DetailVoca/${this.props.topicName}`}>Học ngay</Link>
    );
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
            {
              isAuthenticated ? authLinks : guestLinks
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(ItemsTopic);
