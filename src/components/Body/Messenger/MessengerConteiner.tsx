
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage } from '../../../redux/message-Reduser';
import { AppReducerType } from '../../../redux/redux-store';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Messenger from './Messenger';


let mapStateToProps = (state: AppReducerType) => {
	return {
		chats: state.messenger.chats,
		messages: state.messenger.messages
	}
}
let mapDispatchToProps = {
	addMessage,
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Messenger);
