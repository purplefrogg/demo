import React from 'react';
import User from './User';
import style from './Users.module.scss'

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalCount / props.count)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div className={style.UsersPage}>
			{pages.map(p => <span onClick={() => { props.onPageChanged(p) }} className={p === props.page && style.selectedPage}>{p} </span>)}
			{props.users.map(user => <User user={user}
			isFollowing={props.isFollowing}
			follow={props.follow}
			unfollow={props.unfollow}
			/>)}
		</div>
	)
	}

export default Users;
