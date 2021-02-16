import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)
	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	const activateEditMode = () => {
		if(props.isOwner){
			setEditMode(true)
		} 
	}
	const deactivateEditMode = () => {
		
		props.updateStatus(status)
		setStatus(props.status)
		setEditMode(false)
	}	
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}
	return (
		<div>
			{!editMode &&
				<div onClick={activateEditMode}>
					status: {status}
				</div>}
			{editMode &&
				<div>
					status:
					<input autoFocus={true} onBlur={deactivateEditMode}
						onChange={onStatusChange} value={status} />
				</div>}
		</div>
	)
}


export default ProfileStatusWithHooks;
