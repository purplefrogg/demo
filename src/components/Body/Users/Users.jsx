import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
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

					{user.followed ? <button onClick={() => {
						axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
							withCredentials: true,
							headers: {
								"API-KEY": "dd920698-43c2-4a1d-aa58-8b7dafae5603"
							}
						})
							.then((response) => {
								if (response.data.resultCode === 0) {
									props.unfollow(user.id)
								}
							})


					}}>unfollow</button>
						: <button onClick={() => {
							axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
								withCredentials: true,
								headers: {
									"API-KEY": "dd920698-43c2-4a1d-aa58-8b7dafae5603"
								}

							})
								.then((response) => {
									if (response.data.resultCode === 0) {
										props.follow(user.id)
									}
								})



						}}>follow</button>}
				</div>
				)}
		</div>
	)
}


export default Users;
