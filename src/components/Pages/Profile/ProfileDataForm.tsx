import React from 'react';
import style from './Profile.module.scss';
import { createField, GetStringKeys, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { ProfileType } from '../../../redux/profile-Reducer';

type PropsType = {
	profile: ProfileType

}
type ProfileTypeKeys = GetStringKeys<ProfileType>

let ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> =
	({ handleSubmit, error, profile, ...props }) => {
		return (
			<form onSubmit={handleSubmit}>
				<button>save</button>
				{error && <div className={style.error}>
					{error}
				</div>}
				<div>Full name: {createField<ProfileTypeKeys>("fullName", Input, [], "full name")}</div>
				<div className={style.Info__item}>about me:
			{createField<ProfileTypeKeys>("aboutMe", Textarea, [], "about me")}</div>

				<div className={style.Info__item}>looking for a job: {profile.lookingForAJob ? "yes" : "no"}
					{createField<ProfileTypeKeys>("lookingForAJob", Input, [], "looking for a job", { type: "checkbox", className: style.editInput })}</div>
				<div className={style.Info__item}>looking for a job description:
			{createField<ProfileTypeKeys>('lookingForAJobDescription', Textarea, [], "job Description")}</div>

				{Object.keys(profile.contacts).map(key => {
					return <div key={key}>
						{key}: {createField(`contacts.${key}`, Input, [], key)}
					</div>
				})}
			</form>
		)
	}
const ProfileReduxForm = reduxForm<ProfileType, PropsType>({
	form: 'ProfileData'
})(ProfileDataForm)


export default ProfileReduxForm;
