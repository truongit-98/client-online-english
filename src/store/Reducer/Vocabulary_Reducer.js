import actionType from '../Cons/vocabulary_actionType'

const initialState = {}
const  myReducer = (state =  initialState, action) => {
	switch (action.type) {
		case actionType.get_data_vocabulary:
			return state
		default:
			return state
	}
}
export default myReducer;