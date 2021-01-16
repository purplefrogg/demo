import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Chat.module.scss'

const Chat = (props) => {
	let path = '/Messenger/' + props.id
	return (
	<NavLink to={path} activeClassName={style.active} className={style.chat}>{props.name}</NavLink>
	)
}

export default Chat;
