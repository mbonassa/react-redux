import {connect} from 'react-redux';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';


const mapPropsToState = (state, ownProps) => {
  return Object.assign({}, state.player, {selectedPlaylist: state.playlists.selected})
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleOne: (song, songList) => dispatch(toggleSong(song, songList))
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(Playlist)

