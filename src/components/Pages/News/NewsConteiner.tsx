import { addPost } from '../../../redux/news-Reducer'
import { connect } from 'react-redux';
import News from './News';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../../redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
	return {
		posts: state.news.posts,
	}
}
let mapDispatchToProps = {
	addPost
}
export default compose<React.ComponentType>(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(News);
