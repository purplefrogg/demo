import React from 'react';
import Paginator from '../../common/Paginator/Paginator';
import Preloader from '../../common/Preloader/preloader';
import User from './User';
import style from './Users.module.scss'

const Users = (props) => {
	return (
		<div className={style.UsersPage}>
			<Paginator count={props.count}
				totalCount={props.totalCount}
				page={props.page}
				onPageChanged={props.onPageChanged} />

			{props.isFetching ? <Preloader /> : <div >
				{props.users.map(user => <User user={user}
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
