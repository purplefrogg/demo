import { connect } from 'react-redux';
import { requestUsers, follow, unfollow, UserType} from '../../../redux/users-Reducer';
import Users from './Users';
import React from 'react';
import { getUsers, getCount, getIsFetching, getIsFollowing, getPage, getTotalCount } from '../../../redux/users-selectors';
import { AppReducerType } from '../../../redux/redux-store';


type MapStateToPropsType = {
	page: number
	count: number
	totalCount: number
	users: Array<UserType>
    isFollowing: Array<number>
	isFetching: boolean
}

type MapDispatchToPropsType = {
	follow: (id: number)=> void
	unfollow: (id: number)=> void
	requestUsers: (page: number, count: number) => void
}
type OwmPropsType = {}
type PropsType = MapDispatchToPropsType & MapStateToPropsType & OwmPropsType

class UsersConteiner extends React.Component<PropsType> {
	componentDidMount() {
		let {page, count} = this.props
		this.props.requestUsers(page, count)
	}
	onPageChanged =(pageNumber: number) =>{
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
			
			isFollowing={this.props.isFollowing}
			isFetching={this.props.isFetching}
			/>
			</>
		}
		
	} 


let mapStateToProps = (state: AppReducerType):MapStateToPropsType => {
	
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
	requestUsers,
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwmPropsType, AppReducerType>(mapStateToProps, mapDispatchToProps)(UsersConteiner)
