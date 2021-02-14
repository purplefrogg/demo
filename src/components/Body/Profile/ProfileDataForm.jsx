import React from 'react';
import style from './Profile.module.scss';
import { createField, inputElement } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';


const input = inputElement("input")
const textarea = inputElement("textarea")


let ProfileDataForm = ({handleSubmit, error, profile, deactivateEditMode, ...props }) => {

	return (
		<form onSubmit={handleSubmit}>
			
			<button>save</button>
			{error && <div className={style.error}>
                {error}
                </div>}
			<div>Full name: {createField("fullName",input, null,"full name")}</div>
			<div className={style.Info__item}>about me:  
			{createField("aboutMe",textarea, null,"about me")}</div>
		
			<div className={style.Info__item}>looking for a job: {profile.lookingForAJob ? "yes" : "no"}
			{createField("lookingForAJob",input, null,"looking for a job", {type: "checkbox", className: style.editInput})}</div>
			<div className={style.Info__item}>looking for a job description: 
			{createField("lookingForAJobDescription",textarea, null,"job Description")}</div>
		
			{Object.keys(profile.contacts).map(key => {
				return <div key={key}>
					{key}: {createField("contacts." + key, input, null, key)}
				</div>
			})}
		</form>
	)
}
ProfileDataForm = reduxForm({
    form: 'ProfileData'
})(ProfileDataForm)


export default ProfileDataForm;
