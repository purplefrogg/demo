import React from 'react';
import style from './Profile.module.scss'


const Profile = (props) => {
	
	return (
		<div className={style.ProfilePage}>
			<div className={style.avatar}>
				<img src={props.profile.photos.large} alt="" />
			</div>
			<div className={style.Info}>
				<div className={style.Info__item}>{props.profile.fullName}</div>
				<div className={style.Info__item}> status: {props.profile.aboutMe}</div>
				<div className={style.Info__item}> facebook: {props.profile.contacts.facebook}</div>
				<div className={style.Info__item}> vk: {props.profile.contacts.vk}</div>
				<div className={style.Info__item}> twitter: {props.profile.contacts.twitter}</div>
				<div className={style.Info__item}> instagram: {props.profile.contacts.instagram}</div>
				<div className={style.Info__item}> github: {props.profile.contacts.github}</div>
				<div className={style.Info__item}> mainLink: {props.profile.contacts.mainLink}</div>
					
			</div>
			
			<div className={style.myPosts}>
			</div>
		</div>
	)
}

export default Profile;
