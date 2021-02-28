import React, { FC } from 'react';
import { MessagesType } from '../../../../redux/message-Reduser';
import style from './Message.module.scss'

type PropsType = {
    message: MessagesType
	
}
const Message: FC<PropsType> = ({message}) => {
	return (
		<div className={style.message}>{message.message}</div>
	)
}


export default Message;
