import React from 'react';
import {onChangeTextPostActionCreator, addPostActionCreator} from '../../../redux/news-Reducer'
import News from './News';



const NewsConteiner = (props) => {

	

	let addPost = () => {
		props.store.dispatch(addPostActionCreator())
	}
	let onChangeText = (text) =>{
		props.store.dispatch(onChangeTextPostActionCreator(text))
	}
	let state = props.store.getState().news
	return (
		<News addPost={addPost} onChangeText={onChangeText} state={state}/>
	)
}

export default NewsConteiner;
