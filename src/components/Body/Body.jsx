import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import style from './Body.module.scss'

import Messenger from './Messenger/Messenger';
import Navbar from './Navbar/Navbar';
import News from './News/News'

const Body = (props) => {

    return (
		// basename={process.env.PUBLIC_URL} <-- for github pages
		<HashRouter>
		<div className={style.body}>
					<Navbar />
					<div className={style.content}>
						 <Route path='/Messenger' render={() => <Messenger state={props.state.messenger}/>}/>
						 <Route path='/News' component={News}/>
					</div>
				</div>
		</HashRouter>
        
    )
}

export default Body;
