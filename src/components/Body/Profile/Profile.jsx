import React from 'react';
import Preloader from '../../common/Preloader/preloader';
import style from './Profile.module.scss'
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {
	const changeProfilePhoto = (e) =>{
		let photo = e.currentTarget.files[0]
		props.savePhoto(photo)
	}
	if(!props.profile){
		return <Preloader></Preloader>
	}
	else
	return (
		<div className={style.ProfilePage}>
			<div className={style.avatar}>
			<img  src={props.profile.photos.large != null ? props.profile.photos.large : 'https://sun9-34.userapi.com/impf/c845420/v845420775/bafaa/hP5ZTk4e-O0.jpg?size=200x200&quality=96&proxy=1&sign=c915e9a943591bf8db59656c689429e4&type=album'}
							alt="" />
			</div>
			
			<ProfileInfo profile={props.profile} isOwner={props.isOwner} saveProfile={props.saveProfile}
			status={props.status} updateStatus={props.updateStatus} />
			{props.isOwner && <input onChange={changeProfilePhoto} type="file"/>}
			
		</div>
	)
}

export default Profile;
