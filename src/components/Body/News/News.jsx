import React from 'react';
import style from './News.module.scss'
import Post from '../../common/Post/Post'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { inputElement } from '../../common/FormsControls/FormsControls';

const maxLength100 = maxLengthCreator(100)
const Textarea = inputElement("textarea")
const PostForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit} className={style.addPost}>
			<Field name={"text"} component={Textarea} className={style.Textarea}
			validate={[required, maxLength100]} placeholder="what's new" />
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
    }
	let PostItems = props.state.posts.map(post => <Post key={post.idProfile} idProfile={post.idProfile} icon={post.icon} author={post.author} text={post.text} img={post.img} />)
	return (
		<div className={style.NewsPage}>
			<PostReduxForm onSubmit={onSubmit}/>
			{PostItems}
		</div>
	)
}

export default News;
