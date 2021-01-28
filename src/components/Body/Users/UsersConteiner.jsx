import { connect } from 'react-redux';
import { follow, setCurentPage, setUsers, unfollow, setTotalCount, toggleIsFetching, toggleIsFollowing} from '../../../redux/users-Reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../../common/Preloader/preloader';
import { usersApi } from '../../../api/api';


class UsersConteiner extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		usersApi.getUsers(this.props.page, this.props.count)
			.then((response) => {
				this.props.setUsers(response.data.items)
				this.props.setTotalCount(response.data.totalCount)
				this.props.toggleIsFetching(false)
			})
	}
	onPageChanged =(pageNumber) =>{
		this.props.toggleIsFetching(true)
		this.props.setCurentPage(pageNumber)
		usersApi.getUsers(pageNumber, this.props.count)
			.then((response) => {
				this.props.setUsers(response.data.items)
				this.props.toggleIsFetching(false)
			})
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
	setUsers,
	setCurentPage,
	setTotalCount,
	toggleIsFetching,
	toggleIsFollowing

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersConteiner)
