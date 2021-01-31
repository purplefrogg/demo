
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessageActionCreator, onChangeMessageActionCreator } from '../../../redux/message-Reduser';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Messenger from './Messenger';


let mapStateToProps = (state) => {
	return {
		state: state.messenger,
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

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Messenger);
