import React from 'react';
import style from './Body.module.scss'
import Messages from './Messages/Messages';
import Navbar from './Navbar/Navbar';
import News from './News/News'

const Body = () => {
    return (
        <div className={style.body}>
					<Navbar />
					<div className={style.content}>
						<Messages />
						{/* <News /> */}
					</div>
				</div>
    )
}

export default Body;
