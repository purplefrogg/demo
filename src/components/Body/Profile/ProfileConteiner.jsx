import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../../redux/profile-Reducer'
import { withRouter } from 'react-router-dom';


class ProfileConteiner extends React.Component {

	componentDidMount() {

		let userId = this.props.match.params.userId
		if (!userId) {
			userId = '2'
		}
		this.props.getUserProfile(userId)
	}

	render() {
		return (<Profile profile={this.props.profile} />)
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
}
let mapDispatchToProps = {
	getUserProfile,
}
let WithRouterComponent = withRouter(ProfileConteiner)

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterComponent);
