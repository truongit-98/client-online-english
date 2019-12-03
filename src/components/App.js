import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import {getDataTopic} from '../store/Action/vocabulary_action'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RouterUrl from '../Router/RouterUrl';

class App extends Component {
  componentDidMount(){
		this.props.getDataTopic();
	}
  render() {
    return (
      <Router>
          <Header/>
          <RouterUrl/>
          <hr/>
          <Footer/>
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
	return {
		vocabulary: state.vocabulary
	}
}
const mapDispatchToProps = {
	getDataTopic,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);