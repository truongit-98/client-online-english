import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './layout/Header';

class MainAdmin extends Component {
  render() {
    return (
			<div>
				<Header/>
				<Switch>
					<Route path="/admin" />
				</Switch>
			</div>
    );
  }
}

export default MainAdmin;