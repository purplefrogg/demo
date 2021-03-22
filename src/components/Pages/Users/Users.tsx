import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { UserType } from '../../../redux/users-Reducer';
import { getIsFetching, getIsFollowing, getTotalCount } from '../../../redux/users-selectors';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/preloader';
import User from './User';

type PropsType = {
	page: number
	count: number
	users: Array<UserType>
	follow: (id: number) => void
	unfollow: (id: number) => void
	onPageChanged:  (pageNumber: number) => void
	
}

const Users: FC<PropsType> = (props) => {
	const totalCount = useSelector(getTotalCount)
	const isFetching = useSelector(getIsFetching)
	const isFollowing = useSelector(getIsFollowing)


	let Paginators = <Paginator count={props.count}
		totalCount={totalCount}
		page={props.page}
		onPageChanged={props.onPageChanged} />


	return (
		<div>
			
			{totalCount > props.count && Paginators}
			{isFetching ? <Preloader /> : <div >
				{props.users.map((user: UserType) => <User user={user}
					isFollowing={isFollowing}
					follow={props.follow}
					key={user.id}
					unfollow={props.unfollow}
				/>)}
				{totalCount > props.count && Paginators}
			</div>}
		</div>
	)
}

export default Users;
