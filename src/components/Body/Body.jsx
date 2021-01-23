import React from 'react';
import { Route } from 'react-router-dom';
import style from './Body.module.scss'

import MessengerConteiner from './Messenger/MessengerConteiner';
import Navbar from './Navbar/Navbar';
import NewsConteiner from './News/NewsConteiner';
import UsersConteiner from './Users/UsersConteiner';

const Body = (props) => {
	    return (
		// basename={process.env.PUBLIC_URL} <-- for github pages
			<div className={style.body}>
				<Navbar />
				<div className={style.content}>
					<Route path='/Messenger' render={() => <MessengerConteiner />} />
					<Route path='/Users' render={() => <UsersConteiner />}/>
					<Route path='/News' render={() => <NewsConteiner />} />
					<Route path='/Friends' render={() => { }} />
				</div>
			</div>
		)
}

export default Body;
