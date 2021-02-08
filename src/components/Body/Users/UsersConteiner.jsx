import { connect } from 'react-redux';
import { requestUsers, follow, setCurentPage, unfollow, toggleIsFollowing} from '../../../redux/users-Reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../../common/Preloader/preloader';
import { getUsers, getCount, getIsFetching, getIsFollowing, getPage, getTotalCount } from '../../../redux/users-selectors';

class UsersConteiner extends React.Component {
	componentDidMount() {
		this.props.requestUsers(this.props.page, this.props.count)
	}
	onPageChanged =(pageNumber) =>{
		this.props.requestUsers(pageNumber, this.props.count)
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
	setCurentPage
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersConteiner)
