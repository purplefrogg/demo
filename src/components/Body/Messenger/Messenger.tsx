import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { ChatsType, MessagesType } from '../../../redux/message-Reduser';

import { inputElement } from '../../common/FormsControls/FormsControls';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import style from './Messenger.module.scss'

type PropsType = {
	chats: Array<ChatsType>
    messages: Array<MessagesType>

	addMessage: (message: string)=>void
}

const input = inputElement("input")

const MessageForm = (props:any) => {

    return (
           <form onSubmit={props.handleSubmit}  className={style.input}>
				<Field name={'message'}  component={input}
				className={style.inputArea} />
				<button className={style.btnEnter}>enter</button>
			</form>
    )
}
const MessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'message'
  })(MessageForm)

const Messenger = (props: PropsType) => {
	
	let Chats = props.chats.map(chat =><Chat key={chat.id} chat={chat}/>)
	let Messages = props.messages.map(mess =><Message key={mess.id} message={mess}/>)
	
	const onSubmit = (formData: any) =>{
		props.addMessage(formData.message)
		formData.message = ''	
    }
	return (
		<div className={style.Messenger}>
			<div className={style.chats}>
				{Chats}
			</div>
			<div className={style.messages}>
				{Messages}
				
			</div>
			<MessageReduxForm onSubmit={onSubmit}/>
		</div>
	)
}

export default Messenger;
