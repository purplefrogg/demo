import React, { useState } from 'react';
import ProfileStatusWithHooks from './PofileStatus/ProfileStatusWithHooks';
import style from './Profile.module.scss';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, isOwner,saveProfile, ...props }) => {
	let [editMode, setEditMode] = useState(false)
	const activateEditMode = () => {
		setEditMode(true)
	}
	const onSubmit = (formData) => {
        const promise = saveProfile(formData)
		promise.then(()=>{
			setEditMode(false)
		}).catch(()=>{})
		//.then(()=>{setEditMode(false)},()=>{})
    }
	return (<div className={style.Info}>
		
		<div className={style.Info__item}> {<ProfileStatusWithHooks status={props.status}  isOwner={isOwner}
		 updateStatus={props.updateStatus} />} </div>
		
		{editMode 
		? <ProfileDataForm initialValues={profile} profile={profile}  onSubmit={onSubmit} /> 
		: <ProfileData profile={profile} activateEditMode={activateEditMode} isOwner={isOwner}/>}
	</div>
	)	
}

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
	return (
		<>
			{isOwner && <button onClick={activateEditMode}>edit</button>}
			<div className={style.Info__item}>Full name: {profile.fullName}</div>
			<div className={style.Info__item}>about me: {profile.aboutMe}</div>
			<div className={style.Info__item}>looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
			{Object.keys(profile.contacts).map(key => {
				return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key]} />
			})}
		</>
	)
}



export const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div className={style.Info__item}>{contactTitle}: {contactValue}</div>
	)
}

export default ProfileInfo;
