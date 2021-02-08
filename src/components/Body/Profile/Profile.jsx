import React from 'react';
import Preloader from '../../common/Preloader/preloader';
import ProfileStatus from './PofileStatus/ProfileStatus';
import ProfileStatusWithHooks from './PofileStatus/ProfileStatusWithHooks';
import style from './Profile.module.scss'


const Profile = (props) => {
	if(!props.profile){
		return <Preloader></Preloader>
	}
	else
	return (
		<div className={style.ProfilePage}>
			<div className={style.avatar}>
			<img src={props.profile.photos.large != null ? props.profile.photos.large : 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album'}
							alt="" />
			</div>
			<div className={style.Info}>
				<div className={style.Info__item}> {props.profile.fullName}</div>
				<div className={style.Info__item}> {<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>} </div>
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
