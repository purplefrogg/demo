import React from 'react';
import style from './News.module.scss'
import Post from '../Post/Post'
import {onChangeTextPostActionCreator, addPostActionCreator} from '../../../redux/news-Reducer'



const News = (props) => {

	
	let onChangeText = (e) =>{
		let text = e.target.value;
		let action = onChangeTextPostActionCreator(text)
		props.dispatch(action)
	}
	let addPost = () => {
		props.dispatch(addPostActionCreator())
		
	}
	let PostItems = props.state.posts.map(post =><Post idProfile={post.idProfile} icon={post.icon} author={post.author} text={post.text} img={post.img} />)
	return (
		<div className={style.NewsPage}>
			<div className={style.addPost}>
				<textarea  onChange={onChangeText} value={props.state.inputtingPostText} placeholder="what's new"/>
				<button onClick={addPost} className={style.btnPost}>post</button>
			</div>
			{PostItems}
		</div>
	)
}

export default News;
