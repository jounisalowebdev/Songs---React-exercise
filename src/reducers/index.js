import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Los Angeles', duration: '4:20' },
        { title: 'Lose Yourself', duration: '5:45' },
        { title: 'Macarena', duration: '3:24' },
        { title: 'Throw It Back', duration: '2:43' },
        { title: 'Fake ID', duration: '3:30' },
        { title: 'Run', duration: '3:56' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
