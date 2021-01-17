import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Chat.module.scss'

const Chat = (props) => {
	let path = '/Messenger/' + props.id
	return (
	<NavLink to={path} activeClassName={style.active} className={style.chat}>
		<div className={style.header}>
                <div className={style.icon}>
                    <img src={props.icon} alt="" />
                </div>
                <div className={style.name}>{props.name}</div>
            </div>
		
		
		</NavLink>
	)
}

export default Chat;
