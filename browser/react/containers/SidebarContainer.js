import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux';


const mapPropsToState = (state, ownProps) => ({
    playlists: state.playlists.list
})

export default connect(mapPropsToState)(Sidebar)

