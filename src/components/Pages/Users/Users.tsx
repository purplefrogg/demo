import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserType } from '../../../redux/users-Reducer';
import { getCount, getIsFetching, getIsFollowing, getPage, getTotalCount, getUsers, getUsersFilter } from '../../../redux/users-selectors';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/preloader';
import User from './User';
import { requestUsers, follow, unfollow } from '../../../redux/users-Reducer';
import Search from './Search';
import { useHistory } from 'react-router-dom';
import * as queryString from 'querystring'
import style from './Users.module.scss'

type PropsType = {
	
	
}

const Users: FC<PropsType> = (props) => {
	const totalCount = useSelector(getTotalCount)
	const isFetching = useSelector(getIsFetching)
	const isFollowing = useSelector(getIsFollowing)
	const users = useSelector(getUsers)
	const page = useSelector(getPage)
	const count = useSelector(getCount)
	const filter = useSelector(getUsersFilter)
	const dispatch = useDispatch()
	const history = useHistory()

	
	const onPageChanged = (pageNumber: number) => {
		dispatch(requestUsers(pageNumber, count, filter))
	}
	const onFilterChanged = (friend: null | boolean, term: string) => {
		dispatch(requestUsers(1, count, { term, friend }))
	}

	const Follow = (id: number) => {
		dispatch(follow(id))
	}
	const unFollow = (id: number) => {
		dispatch(unfollow(id))
	}

	
	
	useEffect(() => {
		const parsed: any = queryString.parse(history.location.search.substr(1)) 
		let actualPage = page
		let actualFilter = filter

		if(!!parsed.page) actualPage = +parsed.page
		if(!!parsed.term) actualFilter.term = parsed.term
		actualFilter.friend = parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false
		dispatch(requestUsers(actualPage, count, {term: actualFilter.term, friend: actualFilter.friend}))
		// eslint-disable-next-line 
	}, [])
	useEffect(() => {
		history.push({
			pathname: '/users',
			search: `?term=${filter.term}
			&friend=${filter.friend === null ? 'null' : filter.friend === true ? 'true' : 'false'}
			&page=${page}`
		})
	}, [filter, page])
	
	let Paginators = <Paginator count={count}
		totalCount={totalCount}
		page={page}
		onPageChanged={onPageChanged} />
	

	return (
		<div className={style.UsersPage}>
			<Search onFilterChanged={onFilterChanged} />
			{totalCount > count && Paginators}
			{isFetching ? <Preloader /> : <div >
				{users.map((user: UserType) => <User user={user}
					isFollowing={isFollowing}
					follow={Follow}
					key={user.id}
					unfollow={unFollow}
				/>)}
				{totalCount > count && Paginators}
			</div>}
		</div>
	)
}

export default Users;
