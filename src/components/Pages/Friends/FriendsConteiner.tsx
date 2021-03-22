import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { requestUsers, follow, unfollow } from "../../../redux/users-Reducer"
import { getCount, getFilter, getPage, getUsers } from "../../../redux/users-selectors"
import Search from "../Users/Search"
import style from '../Users/Users.module.scss'
import Users from "../Users/Users"
import withAuthRedirect from "../../hoc/withAuthRedirect"



type PropsType = {}

const FriendsPage: React.FC<PropsType> = () => {
	const users = useSelector(getUsers)
	const page = useSelector(getPage)
	const count = useSelector(getCount)
	const filter = useSelector(getFilter)
	const dispatch = useDispatch()
	
	
	useEffect(() => {
		dispatch(requestUsers(page, count, { term: filter.term, friend: true }))
		// eslint-disable-next-line 
	}, [])
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
	return (
		<div className={style.UsersPage}>
			<Search onFilterChanged={onFilterChanged} filter={filter} />
			<Users onPageChanged={onPageChanged}
				follow={Follow}
				unfollow={unFollow}
				count={count}
				page={page}
				users={users}
			/>
		</div>
	)
}


export default withAuthRedirect(FriendsPage)