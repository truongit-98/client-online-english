import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ListGrammar extends Component {
  render() {
    return (
      <div className="card i2">
        <img src="https://thinhviendaminh.net/wp-content/uploads/2017/02/grammar.jpg" className="card-img-top" alt=""/>
        <div className="card-body">
          <div className="card-Title">Grammar</div>
          <p className="card-text">{this.props.topicGrammarContent}</p>
          <Link to="/" className="btn btn-primary">Xem ngay</Link>
        </div>
      </div>
    );
  }
}

export default ListGrammar;