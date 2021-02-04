import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { inputElement } from '../../common/FormsControls/FormsControls';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import style from './Messenger.module.scss'



const maxLength1000 = maxLengthCreator(1000)
const input = inputElement("input")

const MessageForm = (props) => {

    return (
           <form onSubmit={props.handleSubmit}  className={style.input}>
				<Field name={'message'}  component={input}
				validate={[required, maxLength1000]} className={style.inputArea} />
				<button className={style.btnEnter}>enter</button>
			</form>
    )
}
const MessageReduxForm = reduxForm({
    // a unique name for the form
    form: 'message'
  })(MessageForm)

const Messenger = (props) => {
	
	let Chats = props.state.chats.map(chat =><Chat name={chat.name} id={chat.id} icon={chat.icon}/>)
	let Messages = props.state.messages.map(mess =><Message message={mess.message}/>)
	
	const onSubmit = (formData) =>{
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
