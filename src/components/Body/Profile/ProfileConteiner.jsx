import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../../redux/profile-Reducer'
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileConteiner extends React.Component {

	componentDidMount() {
		
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.myId
		}
		this.props.getUserProfile(userId)
	}
	
	render() {
		return (<Profile profile={this.props.profile} />)
	}
}


let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		myId: state.auth.userId
	}
}
let mapDispatchToProps = {
	getUserProfile,
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	withAuthRedirect
)(ProfileConteiner)
