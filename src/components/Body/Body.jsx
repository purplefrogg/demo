import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import style from './Body.module.scss'
import Messages from './Messages/Messages';
import Navbar from './Navbar/Navbar';
import News from './News/News'

const Body = () => {
    return (
		<BrowserRouter>
		<div className={style.body}>
					<Navbar />
					<div className={style.content}>
						 <Route path='/Messages' component={Messages}/>
						 <Route path='/News' component={News}/>
					</div>
				</div>
		</BrowserRouter>
        
    )
}

export default Body;
