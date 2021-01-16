import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Messages.module.scss'

const Chat = (props) => {
	let path = '/Messages/' + props.id
	return (
	<NavLink to={path} activeClassName={style.active} className={style.chat}>{props.name}</NavLink>
	)
}

const Message = (props) => {
	return (
	<div className={style.message}>{props.message}</div>
	)
}

const Messages = () => {

	let chats = [
		{id: 1 , name:'DIO'},
		{id: 2, name:'Jojo'},
		{id: 3, name:'Polnareff'},
	]
	let messages = [
		{message:'who are you'},
		{message:'I am DIO BRANDO'},
		
	]
	let ChatItems = chats.map(chat =><Chat name={chat.name} id={chat.id}/>)
	let Messages = messages.map(mess =><Message message={mess.message}/>)

	return (
		<div className={style.mainPage}>
			<div className={style.chats}>
				{ChatItems}
			</div>
			<div className={style.messages}>
				{Messages}
			</div>
		</div>
	)
}

export default Messages;
