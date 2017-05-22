import {connect} from 'react-redux';
import Albums from '../components/Albums';

const mapStateToProps = (state) => {
  return Object.assign({}, {albums: state.albums.list});
}

export default connect(mapStateToProps)(Albums);
