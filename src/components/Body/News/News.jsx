import React from 'react';
import style from './News.module.scss'
import Post from '../../common/Post/Post'
import { Field, reduxForm } from 'redux-form';


const PostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.addPost}>
			<Field name={"text"} component={"textarea"} placeholder="what's new" />
			<button className={style.btnPost}>post</button>
		</form>
	)
}
const PostReduxForm = reduxForm({
	// a unique name for the form
	form: 'post'
})(PostForm)

const News = (props) => {

	const onSubmit = (formData) =>{
		props.addPost(formData.text)
		formData.text = ''
    }
	let PostItems = props.state.posts.map(post => <Post idProfile={post.idProfile} icon={post.icon} author={post.author} text={post.text} img={post.img} />)
	return (
		<div className={style.NewsPage}>
			<PostReduxForm onSubmit={onSubmit}/>
			{PostItems}
		</div>
	)
}

export default News;
