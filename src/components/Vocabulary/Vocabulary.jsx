import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './Vocabulary.css';
import ItemsTopic from './ItemsTopic';

class Vocabulary extends Component {
  render() {
    const {topicItem} = this.props.vocabulary;
    return (
      <div className="vocabulary-wrap">
        <div className="vocabulary-item-title">
          <div className="container">
            <h2 className="Title-text">Học từ vựng tiếng Anh theo chủ đề - Online Engline</h2>
            <p className="Title-item-text">Gồm 100+ khóa học từ vựng tiếng Anh theo chủ đề, phù hợp cho mọi đối tượng</p>
            <div className="list-vocabulary">
              <Link to={`/ListVocabulary/`}>Danh sách tất cả từ vựng<i className="fas fa-angle-down ml-2"></i></Link>
            </div>
          </div>
        </div>
        <div className="container body">
          <div id="title-1">
            <p>Danh sách chủ đề</p>
          </div>
          <div className="row">
            {
              topicItem.map((value, key) => {
                if(key === 0){
                  return(
                    <div className="col-md-3" key={key}>
                      <div className="card">
                        <div className="card-body">
                          <div className="card-icon">
                            <i className="fas fa-book"/>
                          </div>
                          <h3 className="card-Title">{value.topicName}</h3>
                          <p className="card-Content">Hệ thống học từ vựng tiếng Anh</p>
                          <hr className="hr-card"/>
                          <Link className="card-link" to={`/DetailVoca/${value.topicName}`}>Học ngay</Link>
                        </div>
                      </div>
                    </div>
                  )
                }
                else return (
                  <ItemsTopic key={key} {...value}></ItemsTopic>
                )
              })
            }
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

export default connect(mapStateToProps)(Vocabulary);