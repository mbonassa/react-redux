import {connect} from 'react-redux';
import Stations from '../components/Stations';

const mapStateToProps = (state, ownProps) => ({stations: convertSongsToStations(state.songs)});
const mapDispatchToProps = (dispatch) => ({});

function convertSongsToStations(songArr) {
	const stations = {};
	songArr.forEach((song) => {
		stations[song.genre] = stations[song.genre] || [];
		stations[song.genre].push(song);
	})
	return stations;
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;