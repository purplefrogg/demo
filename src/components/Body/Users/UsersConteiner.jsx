import { connect } from 'react-redux';
import { requestUsers, follow, setCurrentPage, unfollow, toggleIsFollowing} from '../../../redux/users-Reducer';
import Users from './Users';
import React from 'react';
import { getUsers, getCount, getIsFetching, getIsFollowing, getPage, getTotalCount } from '../../../redux/users-selectors';

class UsersConteiner extends React.Component {
	componentDidMount() {
		let {page, count} = this.props
		this.props.requestUsers(page, count)
	}
	onPageChanged =(pageNumber) =>{
		let {count} = this.props
		this.props.requestUsers(pageNumber, count)
	
	}
	render() {
		
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
			isFetching={this.props.isFetching}
			/>
			</>
		}
		
	}


let mapStateToProps = (state) => {
	
	return {
        users: getUsers(state),
        totalCount: getTotalCount(state),
        page: getPage(state),
		count: getCount(state),
		isFetching: getIsFetching(state),
		isFollowing: getIsFollowing(state)
	}
}

let mapDispatchToProps = {
	follow,
	unfollow,
	toggleIsFollowing,
	requestUsers,
	setCurrentPage
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersConteiner)
