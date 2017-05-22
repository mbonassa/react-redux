import React, {Component} from 'react';
import {connect} from 'react-redux';
import SingleStation from '../components/SingleStation'
import {convertSong} from '../utils';
import { toggleSong } from '../action-creators/player';

const mapPropsToState = (state, ownProps) => ({
    genreName: ownProps.params.genre,
    songs: state.songs.filter(function (song) {
        return song.genre === ownProps.params.genre
        })
        .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleOne: (song, songList) => dispatch(toggleSong(song, songList))
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(SingleStation);


