import React from 'react';
import style from './Post.module.scss'

const Post = () => {
    return (
        <div className={style.post}>
            <div className={style.header}>
                <div className={style.image}>
                    <img src="https://meragor.com/files/styles/ava_800_800_wm/ava-251.jpg" alt=""/>
                </div>
                <div className={style.author}>anime</div>
            </div>
            <img src="https://ic.pics.livejournal.com/anndr_art/18848504/324640/324640_original.jpg" alt=""/>
        </div>
    )
}


export default Post;