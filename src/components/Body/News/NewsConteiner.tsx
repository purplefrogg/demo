import { addPost } from '../../../redux/news-Reducer'
import { connect } from 'react-redux';
import News from './News';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppReducerType } from '../../../redux/redux-store';


let mapStateToProps = (state: AppReducerType) => {
	return {
		posts: state.news.posts,
	}
}
let mapDispatchToProps = {
	addPost
}
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(News);
