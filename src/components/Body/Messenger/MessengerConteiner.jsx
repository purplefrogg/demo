
import { connect } from 'react-redux';
import { addMessageActionCreator, onChangeMessageActionCreator } from '../../../redux/message-Reduser';
import Messenger from './Messenger';


let mapStateToProps = (state) => {
	return {
		state: state.messenger
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator());
		},
		onChangeMessage: (text) => {
			dispatch(onChangeMessageActionCreator(text));
		}
	}
}
let MessengerConteiner = connect(mapStateToProps, mapDispatchToProps)(Messenger)

export default MessengerConteiner;
