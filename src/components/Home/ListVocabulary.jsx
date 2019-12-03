import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ListVocabulary extends Component {
  render() {
    return (
      <div className="card i2">
        <img src="assets/img/vocabulary.jpg" className="card-img-top" alt=""/>
        <div className="card-body">
          <div className="card-Title">{this.props.topicName}</div>
          <p className="card-text">THEME VOCABULARY</p>
          <Link to={`/DetailVoca/${this.props.topicName}`} className="btn btn-primary">Học ngay</Link>
        </div>
      </div>
    );
  }
}

export default ListVocabulary;