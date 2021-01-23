
import { onChangeTextPostActionCreator, addPostActionCreator } from '../../../redux/news-Reducer'
import { connect } from 'react-redux';
import News from './News';

let mapStateToProps = (state) => {
	return {
		state: state.news
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		onChangeText: (text) => {
			dispatch(onChangeTextPostActionCreator(text))
		}
	}
}

let NewsConteiner = connect(mapStateToProps, mapDispatchToProps)(News)


export default NewsConteiner;
