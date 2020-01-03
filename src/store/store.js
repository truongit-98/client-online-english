import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Vocabulary_Reducer from './Reducer/Vocabulary_Reducer';
import errorReducer from './Reducer/errorReducer';
import authReducer from './Reducer/authReducer';
import GrammarReducer from './Reducer/GrammarReducer';
import musicReducer from './Reducer/musicReducer';
import toeic from './Reducer/toeic';
const initialState = {};
const middleWare = [thunk, logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myReducer = combineReducers({
  vocabulary: Vocabulary_Reducer,
  error: errorReducer,
  auth: authReducer,
  grammar: GrammarReducer,
  music: musicReducer,
  toeic: toeic,
});
var store = createStore(
  myReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);
// store.subscribe(function(){
//   console.log(JSON.stringify(store.getState()));
// })
export default store;