
import { addPost } from '../../../redux/news-Reducer'
import { connect } from 'react-redux';
import News from './News';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
	return {
		state: state.news,
	}
}
let mapDispatchToProps = {
	addPost
}
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(News);
