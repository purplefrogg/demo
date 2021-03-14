import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ChatsType } from '../../../../redux/message-Reduser';
import style from './Chat.module.scss'


type PropsType = {
	chat: ChatsType
}


const Chat: FC<PropsType> = ({chat}) => {
	let path = '/Messenger/' + chat.id
	return (
	<NavLink to={path} activeClassName={style.active} className={style.chat}>
		<div className={style.header}>
                <div className={style.icon}>
                    <img src={chat.icon} alt="" />
                </div>
                <div className={style.name}>{chat.name}</div>
            </div>
		
		
		</NavLink>
	)
}

export default Chat;
