import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus} from '../../../redux/profile-Reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileConteiner extends React.Component {

	componentDidMount() {
		
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.myId
			if (!userId) {
				this.props.history.push('/Login') 
			}
		}
		
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
	}
	
	render() {
		return (<Profile profile={this.props.profile} {...this.props}/>)
	}
}


let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		myId: state.auth.userId,
		status: state.profilePage.status
	}
}
let mapDispatchToProps = {
	getUserProfile,
	getStatus,
	updateStatus

}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	
)(ProfileConteiner)
