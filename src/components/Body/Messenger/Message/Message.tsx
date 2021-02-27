import React from 'react';
import { MessagesType } from '../../../../redux/message-Reduser';
import style from './Message.module.scss'

type PropsType = {
    message: MessagesType
	
}
const Message = ({message}: PropsType) => {
	return (
		<div className={style.message}>{message.message}</div>
	)
}


export default Message;
