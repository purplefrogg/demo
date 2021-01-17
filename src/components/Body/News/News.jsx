import React from 'react';
import style from './News.module.scss'
import Post from './Post/Post'

const News = (props) => {

let PostItems = props.state.posts.map(post =><Post icon={post.icon} author={post.author} text={post.text} img={post.img} />)
	return (
		<div className={style}>
			{PostItems}
		</div>
	)
}

export default News;
