import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './components/App';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import store from './store/store';
ReactDOM.render(
  <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
