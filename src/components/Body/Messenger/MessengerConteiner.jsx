import React from 'react';
import { addMessageActionCreator, onChangeMessageActionCreator } from '../../../redux/message-Reduser';
import Messenger from './Messenger';

const MessengerConteiner = (props) => {
	
	let state = props.store.getState().messenger;

	let addMessage = () => {
		props.store.dispatch(addMessageActionCreator())
	}
	
	let onChangeMessage = (text) => {
		props.store.dispatch(onChangeMessageActionCreator(text))
	}
	
	return (
		<Messenger state={state} addMessage={addMessage} onChangeMessage={onChangeMessage}/>
	)
}

export default MessengerConteiner;
