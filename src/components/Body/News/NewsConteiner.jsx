import React from 'react';
import { onChangeTextPostActionCreator, addPostActionCreator } from '../../../redux/news-Reducer'
import storeContext from '../../../storeContext';
import News from './News';



const NewsConteiner = (props) => {
	return (
		<storeContext.Consumer>
			{ (store) => {
				let addPost = () => {
					store.dispatch(addPostActionCreator())
				}
				let onChangeText = (text) => {
				 	store.dispatch(onChangeTextPostActionCreator(text))
				}
				let state = store.getState().news
				return (
					<News addPost={addPost} onChangeText={onChangeText} state={state} />
				)
			}
			}

		</storeContext.Consumer>

	)
}

export default NewsConteiner;
