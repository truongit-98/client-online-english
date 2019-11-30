import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RouterUrl from '../Router/RouterUrl';

class App extends Component {
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

export default App;