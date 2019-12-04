import axios from 'axios';

import {
    fetchMusicPending,
    fetchMusicSuccess,
    fetchMusicError,
    fetchSubtitlesPending,
    fetchSubtitlesSuccess,
    fetchSubtitlesError
} from '../Cons/music_actionType';

// Get ds bai hat
export const loadSong = () => (dispatch) => {
    dispatch(fetchMusicPending());
    axios.get('/api/songs')
        .then(res => {
            if (res.status !== 200) {
                dispatch(fetchMusicError());
            }
            dispatch(fetchMusicSuccess());
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchMusicError(err));
        })
}

export const loadSongDetail = (id) => (dispatch) => {
    dispatch(fetchSubtitlesPending());
    axios.get(`api/song/${id}/subtitles`, { withCredentials: true })
        .then((res) => {
            if (res.status !== 200) {
                dispatch(fetchSubtitlesError());
            }
            dispatch(fetchSubtitlesSuccess());
        })
        .catch((err) => dispatch(fetchSubtitlesError(err)));
}

