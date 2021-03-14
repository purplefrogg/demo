import React from 'react'
import { Field, WrappedFieldProps } from 'redux-form'
import { ValidatorType } from '../../../utils/validators/validators'
import style from './FormsControls.module.scss'


export const inputElement: (InputType: React.ComponentType) => React.FC<any> =
    (InputType) => ({ input, meta, ...restProps }) => {
        const hasError = meta.touched && meta.error
        return (
            <div className={style.inputForm}>
                <InputType  {...input}  {...restProps} className={restProps.className + ' '
            + (hasError && style.error)}/>
            </div>
        )
    }

export function createField<FormKeysType extends string>(name: FormKeysType,
    component: React.FC<WrappedFieldProps>,
    validators: Array<ValidatorType>,
    placeholder: string | null,
    props?: {}) {
    return (
        <div>
            <Field name={name} component={component}
                validate={validators} placeholder={placeholder}
                {...props} />
        </div>
    )
}

export type GetStringKeys<T> = Extract<keyof T, string>


export const Input = inputElement((props) => { return <input {...props} /> })
export const Textarea = inputElement((props) => { return <textarea {...props} /> })
