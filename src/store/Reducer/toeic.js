import {
	FETCH_TOEIC, 
	FETCH_TOEIC_SUCCESS, 
	FETCH_TOEIC_ERROR,
	FETCH_TOEIC_DETAIL, 
	FETCH_TOEIC_DETAIL_SUCCESS, 
	FETCH_TOEIC_DETAIL_ERROR
} from '../Cons/toeic';


const initialState = {
	toeics: [],
	toeicDetail: [],
	error: null
}

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_TOEIC:
		case FETCH_TOEIC_DETAIL:
				return {
						...state,
				}
		case FETCH_TOEIC_SUCCESS: {
			const {data} = action.payload
			return {
					...state,
					toeics: data,
			}
		}
		case FETCH_TOEIC_ERROR:{
			const {error} = action.payload;
			return {
					...state,
					toeics: error
			}
		}
		case FETCH_TOEIC_DETAIL_ERROR: {
			const {error} = action.payload;
			return {
					...state,
					isLoading: false,
					toeics: error
			}
		}	
		case FETCH_TOEIC_DETAIL_SUCCESS:{
			const {data} = action.payload
			return {
					...state,
					toeicDetail: data,
			}
		}	
		default:
				return {
						...state
				}
	}
}