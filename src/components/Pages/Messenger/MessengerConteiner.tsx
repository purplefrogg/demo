
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage } from '../../../redux/message-Reduser';
import { AppStateType } from '../../../redux/redux-store';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Messenger from './Messenger';


let mapStateToProps = (state: AppStateType) => {
	return {
		chats: state.messenger.chats,
		messages: state.messenger.messages
	}
}

export default compose<React.ComponentType>(
	connect(mapStateToProps, {addMessage}),
	withAuthRedirect
)(Messenger);
