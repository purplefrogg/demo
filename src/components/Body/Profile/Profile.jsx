import React from 'react';
import Post from '../Post/Post';
import style from './Profile.module.scss'


const Profile = (props) => {
	let PostItems = props.state.posts.map(post =>
	<Post idProfile={post.idProfile} icon={post.icon} author={post.author} text={post.text} img={post.img} />)
	return (
		<div className={style.ProfilePage}>
			<div className={style.avatar}>
				<img src={props.state.avatar} alt="" />
			</div>
			<div className={style.Info}>
				<div className={style.name}>{props.state.name}</div>
				<div className={style.status}> status: {props.state.status}</div>
					
			</div>
			
			<div className={style.myPosts}>
				{PostItems}
			</div>
		</div>
	)
}

export default Profile;
