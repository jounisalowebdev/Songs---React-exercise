import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a goddamn song you imbred bowl of decomposing poratoes</div>
    }

    return (
        <div>
            <h3>Song: {song.title}</h3>
            <p>Duration: {song.duration}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);