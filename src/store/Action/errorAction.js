import { get_errors} from '../Cons/error_actionType';

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
  return {
    type: get_errors,
    payload: { msg, status, id }
  };
};

