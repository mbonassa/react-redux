import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  selectedAlbum: state.albums.selected,
  currentSong: state.player.currentSong,
  isPlaying: state.player.isPlaying
})

const mapDispatchToProps = (dispatch) => ({
  toggle: (song, list) => {
    dispatch(toggleSong(song, list));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);


// class AlbumContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return <Album
//       selectedAlbum={this.state.albums.selected}
//       currentSong={this.state.player.currentSong}
//       isPlaying={this.state.player.isPlaying}
//       toggleOne={this.toggle}
//     />;
//   }

// }

// export default AlbumContainer;
