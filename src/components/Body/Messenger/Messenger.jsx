import React from 'react';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import style from './Messenger.module.scss'



const Messenger = (props) => {

	let ChatItems = props.state.chats.map(chat =><Chat name={chat.name} id={chat.id}/>)
	
	let Messages = props.state.messages.map(mess =><Message message={mess.message}/>)
	

	return (
		<div className={style.Messenger}>
			<div className={style.chats}>
				{ChatItems}
			</div>
			<div className={style.messages}>
				{Messages}
			</div>
		</div>
	)
}

export default Messenger;
