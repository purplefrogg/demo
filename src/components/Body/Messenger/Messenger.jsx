import React from 'react';
import { addMessageActionCreator, onChangeMessageActionCreator } from '../../../redux/message-Reduser';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import style from './Messenger.module.scss'

const Messenger = (props) => {

	let Chats = props.state.chats.map(chat =><Chat name={chat.name} id={chat.id} icon={chat.icon}/>)
	let Messages = props.state.messages.map(mess =><Message message={mess.message}/>)
	

	let newMessage = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageActionCreator())
		
	}
	
	let onChangeMessage = () => {
		let text = newMessage.current.value;
		let action = onChangeMessageActionCreator(text)
		props.dispatch(action)
	}
	
	return (
		<div className={style.Messenger}>
			<div className={style.chats}>
				{Chats}
			</div>
			<div className={style.messages}>
				{Messages}
				
			</div>
			<div className={style.input}>
				<textarea className={style.inputArea} ref={newMessage}
				  value={props.state.inputtingMessage} onChange={onChangeMessage}
				/>
				<button onClick={addMessage} className={style.btnEnter}>enter</button>
			</div>
		</div>
	)
}

export default Messenger;
