import React, { Component } from 'react';

class ListGrammar extends Component {
  render() {
    return (
      <div className="card i2">
        <img src="https://thinhviendaminh.net/wp-content/uploads/2017/02/grammar.jpg" className="card-img-top" alt=""/>
        <div className="card-body">
          <div className="card-Title">Grammar</div>
          <p className="card-text">{this.props.topicGrammarContent}</p>
          <a href="/" className="btn btn-primary">Xem thông tin</a>
        </div>
      </div>
    );
  }
}

export default ListGrammar;