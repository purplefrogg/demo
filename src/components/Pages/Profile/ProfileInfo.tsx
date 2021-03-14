import React, { useState } from 'react';
import { ContactsType, ProfileType } from '../../../redux/profile-Reducer';
import ProfileStatusWithHooks from './PofileStatus/ProfileStatusWithHooks';
import style from './Profile.module.scss';
import ProfileReduxForm from './ProfileDataForm';

type ProfileInfiPropsType = {
	profile: ProfileType
	isOwner: boolean
	status: string
	updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<ProfileInfiPropsType> = ({ profile, isOwner, saveProfile, ...props }) => {
	let [editMode, setEditMode] = useState(false)
	const activateEditMode = () => {
		setEditMode(true)
	}
	const onSubmit = (formData: ProfileType) => {
		
		saveProfile(formData).then(() => {
			setEditMode(false)
		}).catch(() => { })
		//.then(()=>{setEditMode(false)},()=>{})
	}
	return (<div className={style.Info}>

		<div className={style.Info__item}> {<ProfileStatusWithHooks status={props.status} isOwner={isOwner}
			updateStatus={props.updateStatus} />} </div>

		{editMode
			? <ProfileReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
			: <ProfileData profile={profile} activateEditMode={activateEditMode} isOwner={isOwner} />}
	</div>
	)
}



type ProfilePropsType = {
	profile: ProfileType
	isOwner: boolean
	activateEditMode: () => void
}
const ProfileData: React.FC<ProfilePropsType> = ({ profile, isOwner, activateEditMode }) => {
	return (
		<>
			{isOwner && <button onClick={activateEditMode}>edit</button>}
			<div className={style.Info__item}>Full name: {profile.fullName}</div>
			<div className={style.Info__item}>about me: {profile.aboutMe}</div>
			<div className={style.Info__item}>looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
			<div className={style.Info__item}>looking For A Job Description: {profile.lookingForAJobDescription}</div>
			{Object.keys(profile.contacts).map(key => {
				return <Contact contactTitle={key} key={key} contactValue={profile.contacts[key as keyof  ContactsType]} />
			})}
		</>
	)
}



export const Contact: React.FC<{ contactTitle: string, contactValue: string }>
	= ({ contactTitle, contactValue }) => {
		return (
			<div className={style.Info__item}>{contactTitle}: {contactValue}</div>
		)
	}

export default ProfileInfo;
