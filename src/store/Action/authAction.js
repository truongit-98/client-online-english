import axios from 'axios';
import { returnErrors } from './errorAction';

import {
	user_loading,
	user_loaded,
	auth_error,
	login_success,
	login_fail,
	logout_success,
	register_success,
	register_fail
} from '../Cons/auth_actionType';

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: user_loading });

  axios.get('/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: user_loaded,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: auth_error
      });
    });
};

// Register User
export const register = ({ userName, email, passWord }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ userName, email, passWord });

  axios.post('/users/insert', body, config)
    .then(res => {
      if(res.data.Success){
        dispatch({
          type: register_success,
          payload: res.data
        })
      }
      else{
        dispatch({
          type: register_fail
        });
      }
    }
  )
  .catch(err => {
    dispatch(
      returnErrors(err.response.data, err.response.status, 'register_fail')
    );
    dispatch({
      type: register_fail
    });
  });
};

// Login User
export const login = ({ userName, passWord }, history) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ userName, passWord });

  axios.post('/users/login', body, config)
    .then(res => {
      if(res.data.Success){
        dispatch({
          type: login_success,
          payload: res.data
        });
      } else{
        dispatch({
          type: login_fail
        });
      }
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'login_fail')
      );
      dispatch({
        type: login_fail
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: logout_success
  };
};

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };
  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};