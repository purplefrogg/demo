import React from 'react';
import style from './Users.module.scss'

let UsersPage = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				followed: true,
				name: 'Trish Una',
				status: 'sleep',
				avatar: 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album',
			},
			{
				id: 2,
				followed: true,
				name: 'Josuke Higashikata',
				status: 'aggressive',
				avatar: 'https://sun9-46.userapi.com/impf/c847124/v847124775/b8f1c/vqovdaYXuwY.jpg?size=250x250&quality=96&proxy=1&sign=9a228fea6ba6a978a4828d27a37a8736&type=album',
			},
			{
				id: 3,
				followed: false,
				name: 'Noriaki Kakyoin',
				status: 'chad',
				avatar: 'https://sun9-8.userapi.com/impf/VHbDZu94RuZOKsTEWBlDda1394KyuywrHKBarQ/fH9OqEmXIyA.jpg?size=339x338&quality=96&proxy=1&sign=53744df87aa471c68f971bc36a375b91&type=album',

			},
			{
				id: 4,
				followed: true,
				name: 'Koichi Hirose',
				status: 'aparate',
				avatar: 'https://sun9-59.userapi.com/impf/c848624/v848624775/462a0/Dr0XNNLUSDA.jpg?size=250x250&quality=96&proxy=1&sign=0182183292e77447f13b8bfd3ca5626a&type=album',
			},
		])
	}
	return <div className={style.UsersPage}>
		{
			props.users.map(user => <div key={user.id}>
						{user.name}
						{user.status}
						<img src={user.avatar} alt="" />
						{user.followed ? <button onClick={() =>
						 { props.unfollow(user.id) }}>unfollow</button>
							: <button onClick={() => 
						{ props.follow(user.id) }}>follow</button>}
					</div>
			)}
		</div>
		
}

export default UsersPage;
