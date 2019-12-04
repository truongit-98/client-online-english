import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Vocabulary_Reducer from './Reducer/Vocabulary_Reducer';
import errorReducer from './Reducer/errorReducer';
import authReducer from './Reducer/authReducer';
import musicReducer from './Reducer/musicReducer';
const middleWare = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myReducer = combineReducers({
  vocabulary: Vocabulary_Reducer,
  error: errorReducer,
  auth: authReducer,
  music: musicReducer
});
var store = createStore(
  myReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);
// store.subscribe(function(){
//   console.log(JSON.stringify(store.getState()));
// })
export default store;