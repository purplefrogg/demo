import React from 'react'
import style from './FormsControls.module.scss'


export const inputElement = InputType => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error


    return (
        <div  className={style.inputForm}>
            <InputType  {...input} {...props} className={props.className + ' ' + (hasError ? style.error : '') }/>
        </div>
    )
}