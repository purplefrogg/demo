import React from 'react';
import style from './Users.module.scss'
import * as axios from 'axios'

class UsersPage extends React.Component{
	constructor(props){
		super(props)
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then((response)=>{
				this.props.setUsers(response.data.items)
			})
	}
	
	render(){
		return (
			<div className={style.UsersPage}>
			{
				this.props.users.map(user => <div key={user.id}>
					{user.name}
					{user.status}
					<img src={user.photos.small != null ? user.photos.small : 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album'}
						alt="" />
					{user.followed ? <button onClick={() => { this.props.unfollow(user.id) }}>unfollow</button>
						: <button onClick={() => { this.props.follow(user.id) }}>follow</button>}
				</div>
				)}
		</div>
		)
	}
}

export default UsersPage;
