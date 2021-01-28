import { connect } from 'react-redux';
import { getUsers, follow, setCurentPage, unfollow, toggleIsFollowing} from '../../../redux/users-Reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../../common/Preloader/preloader';

class UsersConteiner extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.page, this.props.count)
	}
	onPageChanged =(pageNumber) =>{
		this.props.getUsers(pageNumber, this.props.count)
		this.props.setCurentPage(pageNumber)
		
	}
	render() {
		if(this.props.isFetching){
			return <Preloader/> 
		}
		else{
			return <>
			<Users onPageChanged={this.onPageChanged}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			count={this.props.count}
			page={this.props.page}
			totalCount={this.props.totalCount}
			users={this.props.users}
			toggleIsFollowing={this.props.toggleIsFollowing}
			isFollowing={this.props.isFollowing}
			/>
			</>
		}
		
	}
}	

let mapStateToProps = (state) => {
	
	return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        page: state.usersPage.page,
		count: state.usersPage.count,
		isFetching: state.usersPage.isFetching,
		isFollowing: state.usersPage.isFollowing
	}
}

let mapDispatchToProps = {
	follow,
	unfollow,
	toggleIsFollowing,
	getUsers,
	setCurentPage
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersConteiner)
