import React, { ChangeEvent, useEffect, useState } from 'react';

type PropsType = {
	isOwner: boolean
	status: string
	updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

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
	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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
