import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios'
import {setUserProfile} from '../../../redux/profile-Reducer'
import Preloader from '../../common/Preloader/preloader';


class ProfileConteiner extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then((response) => {
				this.props.setUserProfile(response.data)
			})
	}

	render() {
		if (!this.props.profile){
			return <Preloader />
		}
		else{
			return (<Profile profile={this.props.profile}
				/>
				)
		}
		
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileConteiner);
