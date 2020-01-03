import {
    FETCH_MUSIC_PENDING,
    FETCH_MUSIC_SUCCESS,
    FETCH_MUSIC_ERROR,
    FETCH_SUBTITLES_PENDING,
    FETCH_SUBTITLES_SUCCESS,
    FETCH_SUBTITLES_ERROR
} from '../Cons/music_actionType';


const initialState = {
    songs: [],
    songDetail: [],
    isLoading: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MUSIC_PENDING:
        case FETCH_SUBTITLES_PENDING:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_MUSIC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                songs: action.payload
            }
        case FETCH_MUSIC_ERROR:
        case FETCH_SUBTITLES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FETCH_SUBTITLES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                songDetail: action.payload
            }
        default:
            return {
                ...state
            }
    }
}