import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto} from '../../../redux/profile-Reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class ProfileConteiner extends React.Component {
	refreshProfile(){
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

	componentDidMount() {
		this.refreshProfile()
	}
	componentDidUpdate(prevProps){
		if(this.props.match.params.userId !== prevProps.match.params.userId){
			this.refreshProfile()
		}
		
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
	updateStatus,
	savePhoto
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	
)(ProfileConteiner)
