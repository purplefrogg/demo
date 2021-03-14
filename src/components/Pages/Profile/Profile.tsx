import React, { ChangeEvent } from 'react';
import { ProfileType } from '../../../redux/profile-Reducer';
import Preloader from '../../common/Preloader/preloader';
import style from './Profile.module.scss'
import ProfileInfo from './ProfileInfo';
 

type PropsType = {
	profile: ProfileType | null
	status: string
	myId: number | null
	isOwner: boolean

	getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>

	savePhoto: (photo: File)=> void
}

const Profile: React.FC<PropsType> = (props) => {
	const changeProfilePhoto = (e: ChangeEvent<HTMLInputElement>) =>{
		if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
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
