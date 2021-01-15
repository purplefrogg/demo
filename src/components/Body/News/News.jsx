import React from 'react';
import style from './News.module.scss'
import Post from './Post/Post'

const News = () => {
	return (
		<div className={style}>
			<Post message='hey, its mario' img="https://atulhost.com/wp-content/uploads/2019/06/anime-wallpaper-hd-07-1536x864.jpg" />
			<Post message="pam, param, pam-pam" img="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77702165506.jpg" />
			<Post message="there must have been some message here" img="https://get.wallhere.com/photo/illustration-night-white-hair-anime-anime-girls-blue-eyes-park-knee-highs-bench-school-uniform-headphones-ponytail-Tomori-Nao-Charlotte-anime-darkness-screenshot-computer-wallpaper-4000x2250-px-629150.jpg" />
			<Post message=" hello, world" img="https://wallpapertag.com/wallpaper/full/6/d/8/465140-beautiful-anime-wallpaper-2560x1600-samsung-galaxy.jpg" />
		</div>
	)
}

export default News;
