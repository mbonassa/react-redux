import Artist from '../components/Artist';
import {connect} from 'react-redux';

import {toggleSong} from '../action-creators/player';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.player, {
    selectedArtist: state.artists.selected,
    children: ownProps.children
  });
}

const mapDispatchToProps = (dispatch) => ({
  toggleOne: (song, list) => {
    dispatch(toggleSong(song, list));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Artist);