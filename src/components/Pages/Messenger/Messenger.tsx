import { FC } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form'
import { ChatsType, MessagesType } from '../../../redux/message-Reduser';
import { required } from '../../../utils/validators/validators';

import { createField, Input } from '../../common/FormsControls/FormsControls';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import style from './Messenger.module.scss'

type PropsType = {
	chats: Array<ChatsType>
    messages: Array<MessagesType>

	addMessage: (message: string)=>void
}

const MessageForm: React.FC<InjectedFormProps<MessagesType>>= (props) => {
    return (
           <form onSubmit={props.handleSubmit}  className={style.input}>
			   {createField('message', Input, [required], null, {className: style.inputArea})}
				<button className={style.btnEnter}>enter</button>
			</form>
    )
}
const MessageReduxForm = reduxForm<MessagesType>({
    form: 'message'
  })(MessageForm)

const Messenger: FC<PropsType> = ({chats, messages,...props}) => {
	
	let Chats = chats.map(chat =><Chat key={chat.id} chat={chat}/>)
	let Messages = messages.map(mess =><Message key={mess.id} message={mess}/>)
	
	const onSubmit = (formData: MessagesType) =>{
		formData.text && props.addMessage(formData.text)
		formData.text = ''	
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
