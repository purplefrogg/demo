import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../redux/users-Reducer';
import style from './Users.module.scss'

type PropsType = {
	user: UserType
	isFollowing: Array<number>

	follow: (id: number)=> void
	unfollow: (id: number)=> void
}

const User: FC<PropsType> = ({user, ...props}) => {
	return (
		<div className={style.User} key={user.id}>
			<NavLink className={style.avatar} to={`/Profile/${user.id}`}>
				<img src={user.photos.small === null ? 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album'
				: user.photos.small}
					alt="" /></NavLink>
			<div className={style.info}>
				<div className={style.name}>{user.name}</div>
				<div className={style.status}>{user.status}</div>
			</div>
			{user.followed ? <button disabled={props.isFollowing.some((id: number) => id === user.id)}
				onClick={() => { props.unfollow(user.id) }}>
				unfollow</button>
				: <button disabled={props.isFollowing.some((id: number) => id === user.id)}
					onClick={() => { props.follow(user.id) }}>
					follow</button>}
		</div>
	)
}

export default User;
