import {get_all_grammar, get_grammar_id} from '../Cons/grammar_actionType';
const initialState = {
	grammarIteam: [],
	grammarItemaDetail: [],
}
const myReducer = (state = initialState, action) => {
	switch (action.type) {
		case get_all_grammar:
			return {
				...state,
				grammarIteam: action.payload
			}
		case get_grammar_id:
			return {
				...state,
				grammarItemaDetail: action.payload
			}
		default:
			return state
	}
}

export default myReducer;