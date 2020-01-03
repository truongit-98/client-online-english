import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import RouterUrl from './RouterUrl';
import MainAdmin from '../Admin/main';

class Main extends Component {
  render() {
    return (
			<Switch>
				<Route path="/admin" component={MainAdmin} />
				<Route path="/"  component={RouterUrl}/>
			</Switch>
    );
  }
}

export default Main;