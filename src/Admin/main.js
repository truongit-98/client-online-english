import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './layout/Header';
import Vocabulary from './vocabulary';

class MainAdmin extends Component {
  render() {
    return (
			<div>
				<Header/>
				<Switch>
					<Route path="/admin" component={Vocabulary} />
				</Switch>
			</div>
    );
  }
}

export default MainAdmin;