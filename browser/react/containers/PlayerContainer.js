import AUDIO from '../audio';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state.player)
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  next: () => {
    dispatch(next());
  },
  prev: () => {
    dispatch(previous());
  },
  toggle: (currentSong, currentList) => {
    dispatch(
      toggleSong(currentSong, currentList)
    )
  } 
})

export default connect(mapStateToProps, mapDispatchToProps)(Player);