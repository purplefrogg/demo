import React from 'react';
import style from './Users.module.scss'

const Users = (props) => {
		let pagesCount = Math.ceil(props.totalCount / props.count)
		let pages = []
		for(let i = 1; i <= pagesCount; i++){
			pages.push(i)
		}
		return (
			<div className={style.UsersPage}>
				{pages.map( p => <span onClick={()=>{props.onPageChanged(p)}} className={p === props.page&& style.selectedPage}>{p} </span>)}
				{
					props.users.map(user => <div key={user.id}>
						{user.name}
						{user.status}
						<img src={user.photos.small != null ? user.photos.small : 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album'}
							alt="" />
						{user.followed ? <button onClick={() => { props.unfollow(user.id) }}>unfollow</button>
							: <button onClick={() => { props.follow(user.id) }}>follow</button>}
					</div>
					)}
			</div>
		)
	}


export default Users;
