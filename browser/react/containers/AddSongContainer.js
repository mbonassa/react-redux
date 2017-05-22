import {connect} from 'react-redux';
import AddSong from '../components/AddSong';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {songs: state.songs, playlists: state.playlists})
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitDispatch: (playlistId, songId) => {
    dispatch(addSongToPlaylist(playlistId, songId))
  },
  songLoader: () => dispatch(loadAllSongs())
});

class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({
      songId: 1,
      error: false
    })
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    this.props.songLoader();

  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();

    const playlistId = this.props.playlists.selected.id;
    const songId = this.state.songId;

    this.props.submitDispatch(playlistId, songId)

  }

  render() {

    const error = this.state.error;
    const songId = this.state.songId;

    return (
      <AddSong
        {...this.props}
        error={error}
        songId={songId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddSongContainer);