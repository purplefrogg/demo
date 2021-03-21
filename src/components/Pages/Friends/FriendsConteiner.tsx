import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getUsers, getIsFetching, getIsFollowing, getTotalCount, getFilter, getPage, getCount } from '../../../redux/users-selectors';
import { AppStateType } from '../../../redux/redux-store';
import Users from '../Users/Users';
import { UserType, follow, unfollow, requestUsers, FilterType } from '../../../redux/users-Reducer';
import Search from '../Users/Search';
import style from '../Users/Users.module.scss'

type MapStateToPropsType = {
	page: number
	count: number
	totalCount: number
	users: Array<UserType>
	isFollowing: Array<number>
	isFetching: boolean
	filter: FilterType
}

type MapDispatchToPropsType = {
	follow: (id: number) => void
	unfollow: (id: number) => void
	requestUsers: (page: number, count: number, filter: FilterType) => void
}
type OwmPropsType = {}
type PropsType = MapDispatchToPropsType & MapStateToPropsType & OwmPropsType

const FriendsConteiner: React.FC<PropsType> = ({ page, requestUsers, ...props }) => {

	useEffect(() => {
		requestUsers(page, props.count, {term: '', friend: true})
		// eslint-disable-next-line 
	}, [])
	const onPageChanged = (pageNumber: number) => {
		requestUsers(pageNumber, props.count, props.filter)
	}
	const onFilterChanged = (friend: null | boolean, term: string) => {
		requestUsers(1, props.count, { term, friend })
	}


	return (
		<div className={style.UsersPage}>
		<Search onFilterChanged={onFilterChanged} filter={props.filter}/>
		<Users onPageChanged={onPageChanged}
	
			follow={props.follow}
			unfollow={props.unfollow}
			count={props.count}
			page={page}

			totalCount={props.totalCount}
			users={props.users}
			isFollowing={props.isFollowing}
			isFetching={props.isFetching}
		/>
		</div>
	)


}


let mapStateToProps = (state: AppStateType): MapStateToPropsType => {

	return {
		users: getUsers(state),
		totalCount: getTotalCount(state),
		page: getPage(state),
		count: getCount(state),
		isFetching: getIsFetching(state),
		isFollowing: getIsFollowing(state),
		filter: getFilter(state)
	}
}

let mapDispatchToProps = {
	follow,
	unfollow,
	requestUsers,
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwmPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(FriendsConteiner)
