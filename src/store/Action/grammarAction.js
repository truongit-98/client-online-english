import axios from 'axios';
import {get_all_grammar, get_grammar_id} from '../Cons/grammar_actionType'
import { returnErrors } from './errorAction';
//api topic
export const getDataGrammar = () => dispatch=> {
  axios.get("/topicGrammars/getAll")
  .then(res =>
    dispatch({
      type: get_all_grammar,
      payload: res.data.Data
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};
export const getDataGrammarDetail = (history,grammarID) => dispatch=> {
  axios.get(`/grammars/getAll?grammarID=${grammarID}`)
  .then(res =>
    dispatch({
      type: get_grammar_id,
      payload: history.push({
        pathname: "/GrammarDetail/",
        search: `getAll?grammarID=${grammarID}`,
        state: {item: res.data.Data}
      })
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};