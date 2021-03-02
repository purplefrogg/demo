import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Post.module.scss'

const Post = (props) => {
    
    return (
        <div className={style.post}>
            <div className={style.header}>
                <div className={style.icon}>
                    <img src={props.icon} alt="" />
                </div>
                    <NavLink to={"/" + props.idProfile}>
                <div className={style.author}>{props.author}</div>
                </NavLink>
                
            </div> 
            <div className={style.image}>
              <img src={props.img} alt=''/>
            </div>
            <div className={style.text}>
                {props.text}
            </div>
        </div>
    )
}


export default Post;