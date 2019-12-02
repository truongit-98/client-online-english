import { get_errors} from '../Cons/error_actionType';

const initialState = {
  msg: {},
  status: null,
  id: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case get_errors:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      };
    default:
      return state;
  }
}