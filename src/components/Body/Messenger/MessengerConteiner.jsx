import React from 'react';
import { addMessageActionCreator, onChangeMessageActionCreator } from '../../../redux/message-Reduser';
import storeContext from '../../../storeContext';
import Messenger from './Messenger';

const MessengerConteiner = (props) => {
	return (
		<storeContext.Consumer>
			{ (store) => {
				let state = store.getState().messenger;
				let addMessage = () => {
					store.dispatch(addMessageActionCreator())
				}
				let onChangeMessage = (text) => {
					store.dispatch(onChangeMessageActionCreator(text))
				}
				
				return (
					<Messenger state={state} addMessage={addMessage} onChangeMessage={onChangeMessage} />
				)
			}
			}</storeContext.Consumer>

	)
}

export default MessengerConteiner;
