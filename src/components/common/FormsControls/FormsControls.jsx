import React from 'react'
import { Field } from 'redux-form'
import style from './FormsControls.module.scss'


export const inputElement = InputType => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error


    return (
        <div className={style.inputForm}>
            <InputType  {...input} {...props} className={props.className + ' ' + (hasError ? style.error : '')} />
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (name, component, validators,placeholder, props) => (
    <div>
        <Field name={name} component={component} 
            validate={validators} placeholder={placeholder}
            {...props} />
    </div>
)