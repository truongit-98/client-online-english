import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import RouterUrl from './RouterUrl';
import MainAdmin from '../Admin/main';

class Main extends Component {
  render() {
    return (
			<div>
				<Switch>
					<Route path="/"  component={RouterUrl}/>
					<Route path="/admin" component={MainAdmin} />
				</Switch>
			</div>
    );
  }
}

export default Main;