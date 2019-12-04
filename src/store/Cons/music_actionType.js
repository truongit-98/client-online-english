
// action type
// action type of music
export const FETCH_MUSIC_PENDING = "FETCH_MUSIC_PENDING";
export const FETCH_MUSIC_SUCCESS = "FETCH_MUSIC_SUCCESS";
export const FETCH_MUSIC_ERROR = "FETCH_MUSIC_ERROR";

// action type of musicDetail
export const FETCH_SUBTITLES_PENDING = "FETCH_SUBTITLES_PENDING";
export const FETCH_SUBTITLES_SUCCESS = "FETCH_SUBTITLES_SUCCESS";
export const FETCH_SUBTITLES_ERROR = "FETCH_SUBTITLES_ERROR";

// action Creators of music
export function fetchMusicPending() {
    return {
        type: FETCH_MUSIC_PENDING
    }
}


export function fetchMusicSuccess(data) {
    return {
        type: FETCH_MUSIC_SUCCESS,
        payload: data
    }
}


export function fetchMusicError(err) {
    return {
        type: FETCH_MUSIC_ERROR,
        payload: err
    }
}

//action creators of musicDetail

export function fetchSubtitlesPending() {
    return {
        type: FETCH_SUBTITLES_PENDING,
    }
}

export function fetchSubtitlesSuccess(data) {
    return {
        type: FETCH_SUBTITLES_SUCCESS,
        payload: data
    }
}

export function fetchSubtitlesError(err) {
    return {
        type: FETCH_SUBTITLES_ERROR,
        payload: err
    }
}
