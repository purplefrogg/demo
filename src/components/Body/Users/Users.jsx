import React from 'react';
import { NavLink } from 'react-router-dom';
import { followApi } from '../../../api/api';
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
			{
				props.users.map(user => <div className={style.User} key={user.id}>

					<NavLink className={style.avatar} to={`/Profile/${user.id}`}>
						<img src={user.photos.small != null ? user.photos.small : 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album'}
							alt="" /></NavLink>
					<div className={style.info}>
						<div className={style.name}>{user.name}</div>
						<div className={style.status}>{user.status}</div>
					</div>
					{user.followed ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
						
						props.toggleIsFollowing(true, user.id)
						followApi.followDelete(user.id)
							.then((response) => {
								if (response.data.resultCode === 0) {
									props.unfollow(user.id)
								}
								props.toggleIsFollowing(false, user.id)
							})
					}}>unfollow</button>
						: <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
							props.toggleIsFollowing(true, user.id)
							followApi.followPost(user.id)
								.then((response) => {
									if (response.data.resultCode === 0) {
										props.follow(user.id)
									}
									props.toggleIsFollowing(false, user.id)
								})
						}}>follow</button>}
				</div>
				)}
		</div>
	)
}


export default Users;
