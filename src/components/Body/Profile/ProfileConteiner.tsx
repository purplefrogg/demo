import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, saveProfile, ProfileType, savePhoto} from '../../../redux/profile-Reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { AppReducerType } from '../../../redux/redux-store';

type MapStateToPropsType = {
	profile: ProfileType | null
	status: string
	myId: number | null
}

type MapDispatchToPropsType = {
	getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => void
}
type OwmPropsType = {
	match: any
	history: any
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType & OwmPropsType
class ProfileConteiner extends React.Component<PropsType> {
	refreshProfile(){
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.myId
			if (!userId) {
				this.props.history.push('/Login') 
			}
		}
		if (userId !== null) {
			this.props.getUserProfile(userId)
			this.props.getStatus(userId)
		}		
	}

	componentDidMount() {
		this.refreshProfile()
	}
	componentDidUpdate(prevProps: PropsType){
		if(this.props.match.params.userId !== prevProps.match.params.userId){
			this.refreshProfile()
		}
		
	}
	
	render() {
		return (<Profile profile={this.props.profile} {...this.props}
		isOwner={!!!this.props.match.params.userId }/>)
	}
}


let mapStateToProps = (state: AppReducerType) => {
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
	saveProfile,
	savePhoto
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
	
)(ProfileConteiner)
