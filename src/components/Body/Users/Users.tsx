import React from 'react';
import { UserType } from '../../../redux/users-Reducer';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/preloader';
import User from './User';
import style from './Users.module.scss'

type PropsType = {
	page: number
	count: number
	totalCount: number
	users: Array<UserType>
	isFollowing: Array<number>
	isFetching: boolean


	follow: (id: number)=> void
	unfollow: (id: number)=> void
	onPageChanged: (pageNumber: number) => void
}

const Users = (props: PropsType) => {
	return (
		<div className={style.UsersPage}>
			<Paginator count={props.count}
				totalCount={props.totalCount}
				page={props.page}
				onPageChanged={props.onPageChanged} />

			{props.isFetching ? <Preloader /> : <div >
				{props.users.map((user: UserType) => <User user={user}
					isFollowing={props.isFollowing}
					follow={props.follow}
					key={user.id}
					unfollow={props.unfollow}
				/>)}
					<Paginator count={props.count}
				totalCount={props.totalCount}
				page={props.page}
				onPageChanged={props.onPageChanged} />
			</div>}
		</div>
	)
}

export default Users;
