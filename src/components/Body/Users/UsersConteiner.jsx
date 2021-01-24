import { connect } from 'react-redux';
import { followAC, setCurentPageAC, setUsersAC, unfollowAC, setTotalCountAC} from '../../../redux/users-Reducer';
import * as axios from 'axios'
import Users from './Users';
import React from 'react';

class UsersConteiner extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?
		page=${this.props.page}&count=${this.props.count}`)
			.then((response) => {
				this.props.setUsers(response.data.items)
				this.props.setTotalCount(response.data.totalCount)
			})
	}
	onPageChanged =(pageNumber) =>{
		this.props.setCurentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?
		page=${pageNumber}&count=${this.props.count}`)
			.then((response) => {
				this.props.setUsers(response.data.items)
				
			})
	}
	render() {
		return <Users onPageChanged={this.onPageChanged}
		follow={this.props.follow}
		unfollow={this.props.unfollow}
		count={this.props.count}
		page={this.props.page}
		totalCount={this.props.totalCount}
		users={this.props.users}
		/>
	}
}


let mapStateToProps = (state) => {
	return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        page: state.usersPage.page,
        count: state.usersPage.count,
	}
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurentPage: (page) => {
            dispatch(setCurentPageAC(page));
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersConteiner)
