import axios from 'axios';
import actionType from '../Cons/vocabulary_actionType'

//api topic
export const getDataTopic = () => dispatch=> {
  axios.get("/api/topics")
  .then(res =>
    dispatch({
      type: actionType.get_data_topic,
      payload_topic: res.data,
		})
	)
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
}