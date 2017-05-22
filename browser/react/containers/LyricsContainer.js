import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import { connect } from 'react-redux';

import {searchLyrics} from '../action-creators/lyrics';

const mapState = (state,ownProps) =>{
  return Object.assign({}, state)
}
const mapDispatchToProps = (dispatch, ownProps) => ({
  searchLyricsFromStore: (artist,song) => {
    dispatch(
      searchLyrics(artist,song)
    )
  }
});

class LyricsContainer extends Component {

  constructor(props) {

    super(props);

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    });
    console.log(this.props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.searchLyricsFromStore(this.state.artistQuery, this.state.songQuery);
    }
  }

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  render() {
    return (
      <Lyrics
        {...this.props}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

export default connect(mapState, mapDispatchToProps)(LyricsContainer);

