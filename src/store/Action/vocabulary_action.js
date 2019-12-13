import axios from 'axios';
import actionType from '../Cons/vocabulary_actionType'
import { returnErrors } from './errorAction';
//api topic
export const getDataTopic = () => dispatch=> {
  axios.get("/api/topics")
  .then(res =>
    dispatch({
      type: actionType.get_data_topic,
      payload_topic: res.data,
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};
export const getlistDataVocabulary = () => dispatch=> {
  axios.get(`/api/vocabularies?limit=12&offset=12`)
  .then(res =>
    dispatch({
      type: actionType.get_data_listVocabulary,
      payload_list: res.data,
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
}
//api chi tiết topic
export const getThemeVocabulary = (topicName) => dispatch=> {
  axios.get(`/api/topic/${topicName}/vocabularies`)
  .then(res =>
    dispatch({
      type: actionType.get_data_topic_vocabulary,
      payload_vocaTheme: res.data[0].Vocabularies,
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
}
//api search
export const searchData = ((history, name) => dispatch => {
  axios.get(`/api/vocabularies/search?q=${name}`)
  .then(res => 
    dispatch({
      type: actionType.get_data_search_vocabulary,
      payload_search: history.push({
        pathname: "/Search",
        search: `?q=${name}`,
        state: {item: res.data}
      })
    })
  )
  .catch(err =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
});
