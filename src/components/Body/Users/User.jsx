import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.scss'

const User = ({user, ...props}) => {
	return (
		<div className={style.User} key={user.id}>
			<NavLink className={style.avatar} to={`/Profile/${user.id}`}>
				<img src={user.photos.small != null ? user.photos.small : 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album'}
					alt="" /></NavLink>
			<div className={style.info}>
				<div className={style.name}>{user.name}</div>
				<div className={style.status}>{user.status}</div>
			</div>
			{user.followed ? <button disabled={props.isFollowing.some(id => id === user.id)}
				onClick={() => { props.unfollow(user.id) }}>
				unfollow</button>
				: <button disabled={props.isFollowing.some(id => id === user.id)}
					onClick={() => { props.follow(user.id) }}>
					follow</button>}
		</div>
	)
}

export default User;