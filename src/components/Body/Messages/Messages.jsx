import React from 'react';
import style from './Messages.module.scss'


const Messages = () => {
	return (
		<div className={style.mainPage}>
			<div className={style.chats}>
				<div className={style.chat}>Dio</div>
				<div className={style.chat +' '+ style.active}>Jojo</div>
				<div className={style.chat}>Polnareff</div>
			</div>
			<div className={style.messages}>
				<div className={style.message}>who are you</div>
				<div className={style.message}>I am DIO BRANDO</div>
			</div>
		</div>
	)
}

export default Messages;
