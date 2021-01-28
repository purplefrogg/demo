import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios'
import {setUserProfile} from '../../../redux/profile-Reducer'
import { withRouter } from 'react-router-dom';


class ProfileConteiner extends React.Component {

	componentDidMount() {
		
		let userId = this.props.match.params.userId
		if (!userId){
			userId = '2'
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
			.then((response) => {
				this.props.setUserProfile(response.data)
			})
	}

	render() {
		return (<Profile profile={this.props.profile}/>)
	}
}

let mapStateToProps = (state) => {
	return {
        profile: state.profilePage.profile
	}
}
let mapDispatchToProps =  {
	setUserProfile,
}
let WithRouterComponent = withRouter(ProfileConteiner)

export default connect(mapStateToProps, mapDispatchToProps)(WithRouterComponent);
