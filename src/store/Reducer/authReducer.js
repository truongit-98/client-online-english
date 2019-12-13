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

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: true,
  user: null,
  messenger: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case user_loading:
      return {
        ...state
      };
    case user_loaded:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case login_success:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: true,
          messenger: false
        };
    case register_success:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: false,
        isLoading: false,
      };
    case auth_error:
    case login_fail:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false,
          messenger: true
        };
    case logout_success:
    case register_fail:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}