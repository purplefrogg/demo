
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage } from '../../../redux/message-Reduser';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Messenger from './Messenger';


let mapStateToProps = (state) => {
	return {
		state: state.messenger,
	}
}
let mapDispatchToProps = {
	addMessage,
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Messenger);
