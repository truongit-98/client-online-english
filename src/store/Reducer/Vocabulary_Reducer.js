import actionType from '../Cons/vocabulary_actionType'

const initialState = {
  topicItem: [],
  vocabularyItem: [],
}
const  myReducer = (state =  initialState, action) => {
  switch (action.type) {
    case actionType.get_data_topic:
      return {
        ...state,
        topicItem: action.payload_topic
      };
    case actionType.get_data_topic_vocabulary:
      return {
        ...state,
        vocabularyItem: action.payload_vocaTheme
      };
    default:
      return state
  }
}
export default myReducer;