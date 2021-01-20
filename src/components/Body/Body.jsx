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
						 dispatch={props.dispatch}/>}
						 />
						 <Route path='/News' render={() => <News dispatch={props.dispatch} state={props.state.news}/>}/>
						 <Route path='/Friends' render={() => {}}/>
						 <Route path='/id001' render={() => <Profile state={props.state.profile.id001}/>}/>
						 <Route path='/id002' render={() => <Profile state={props.state.profile.id002}/>}/>
						 <Route path='/id003' render={() => <Profile state={props.state.profile.id003}/>}/>
						 <Route path='/id004' render={() => <Profile state={props.state.profile.id004}/>}/>
					</div>
				</div>
		</HashRouter>
        
	)
	
}

export default Body;
