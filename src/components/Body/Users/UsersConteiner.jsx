import { connect } from 'react-redux';
import { follow, setCurentPage, setUsers, unfollow, setTotalCount, toggleIsFetching } from '../../../redux/users-Reducer';
import * as axios from 'axios'
import Users from './Users';
import React from 'react';
import Preloader from '../../common/Preloader/preloader';


class UsersConteiner extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?
		page=${this.props.page}&count=${this.props.count}`)
			.then((response) => {
				this.props.setUsers(response.data.items)
				this.props.setTotalCount(response.data.totalCount)
				this.props.toggleIsFetching(false)
			}).catch(error =>{
				console.log('error')
			})
	}
	onPageChanged =(pageNumber) =>{
		this.props.toggleIsFetching(true)
		this.props.setCurentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?
		page=${pageNumber}&count=${this.props.count}`)
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
	}
}

let mapDispatchToProps = {
	follow,
	unfollow,
	setUsers,
	setCurentPage,
	setTotalCount,
	toggleIsFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersConteiner)
