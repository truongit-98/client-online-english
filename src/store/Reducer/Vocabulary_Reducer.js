import actionType from '../Cons/vocabulary_actionType'

const initialState = {
  topicItem: [],
  vocabularyItem: [],
  searchItem: [],
  listvocabulary: [],
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
    case actionType.get_data_search_vocabulary:
      return {
        ...state,
        searchItem: action.payload_search
      };
    case actionType.get_data_listVocabulary:
      return {
        ...state,
        listvocabulary: action.payload_list
      };
    default:
      return state
  }
}
export default myReducer;