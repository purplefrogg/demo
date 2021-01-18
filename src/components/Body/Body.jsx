import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import style from './Body.module.scss'

import Messenger from './Messenger/Messenger';
import Navbar from './Navbar/Navbar';
import News from './News/News'
import Profile from './Profile/Profile';

const Body = (props) => {

    return (
		// basename={process.env.PUBLIC_URL} <-- for github pages
		<HashRouter>
		<div className={style.body}>
					<Navbar />
					<div className={style.content}>
						 <Route path='/Messenger' render={() => <Messenger state={props.state.messenger}
						 addMessage={props.addMessage}
						 onChangeMessage={props.onChangeMessage}/>}/>
						 <Route path='/News' render={() => <News state={props.state.news}/>}/>
						 <Route path='/Friends' render={() => {}}/>
						 <Route path='/Profile' render={() => <Profile/>}/>
					</div>
				</div>
		</HashRouter>
        
    )
}

export default Body;
