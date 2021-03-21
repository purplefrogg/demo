import React, { FC } from 'react';
import { UserType } from '../../../redux/users-Reducer';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/preloader';
import User from './User';

type PropsType = {
	page: number
	count: number
	totalCount: number
	users: Array<UserType>
	isFollowing: Array<number>
	isFetching: boolean

	follow: (id: number) => void
	unfollow: (id: number) => void
	onPageChanged:  (pageNumber: number) => void
	
}

const Users: FC<PropsType> = (props) => {
	let Paginators = <Paginator count={props.count}
		totalCount={props.totalCount}
		page={props.page}
		onPageChanged={props.onPageChanged} />
	return (
		<div>
			
			{props.totalCount > props.count && Paginators}
			{props.isFetching ? <Preloader /> : <div >
				{props.users.map((user: UserType) => <User user={user}
					isFollowing={props.isFollowing}
					follow={props.follow}
					key={user.id}
					unfollow={props.unfollow}
				/>)}
				{props.totalCount > props.count && Paginators}
			</div>}
		</div>
	)
}

export default Users;
