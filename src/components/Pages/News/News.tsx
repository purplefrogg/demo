import { FC } from 'react';
import style from './News.module.scss'
import Post from '../../common/Post/Post'
import { InjectedFormProps, reduxForm } from 'redux-form';
import { maxLength100, required } from '../../../utils/validators/validators';
import { createField, Textarea } from '../../common/FormsControls/FormsControls';
import { PostType } from '../../../redux/news-Reducer';

type PropsType = {
	posts: Array<PostType>
	addPost: (text: string) => void
}


const PostForm: React.FC<InjectedFormProps<PostType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={style.addPost}>
			{createField('text', Textarea, [required, maxLength100], "what's new",
				{ className: style.Textarea })}
			<button className={style.btnPost}>post</button>
		</form>
	)
}
const PostReduxForm = reduxForm<PostType>({
	form: 'post'
})(PostForm)

const News: FC<PropsType> = (props) => {

	const onSubmit = (formData: PostType) => {
		props.addPost(formData.text)
	}
	let PostItems = props.posts.map(post => <Post key={post.idProfile} idProfile={post.idProfile}
		icon={post.icon} author={post.author} text={post.text} img={post.img} />)
	return (
		<div className={style.NewsPage}>
			<PostReduxForm onSubmit={onSubmit} />
			{PostItems}
		</div>
	)
}

export default News;
