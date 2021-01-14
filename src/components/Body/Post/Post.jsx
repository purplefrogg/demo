import React from 'react';
import style from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.header}>
                <div className={style.icon}>
                    <img src="https://meragor.com/files/styles/ava_800_800_wm/ava-251.jpg" alt="" />
                </div>
                <div className={style.author}>anime</div>
            </div>
            <div className={style.image}>
              <img src={props.img} alt=''/>
            </div>
            <div className={style.text}>
                {props.message}
            </div>
        </div>
    )
}


export default Post;