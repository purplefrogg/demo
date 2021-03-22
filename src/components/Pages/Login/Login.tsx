import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../../redux/auth-Reducer';
import { AppStateType } from '../../../redux/redux-store';
import { maxLength100, required } from '../../../utils/validators/validators';
import { createField, GetStringKeys, Input } from '../../common/FormsControls/FormsControls';


const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps>
    = ({ handleSubmit, error, captcha }) => {
        return (
            <form onSubmit={handleSubmit} >
                {createField<LoginFormValuesTypeKeys>("email", Input, [required, maxLength100], "email")}
                {createField<LoginFormValuesTypeKeys>("password", Input, [required, maxLength100], "password", { type: "password" })}
            remember me
                {createField<LoginFormValuesTypeKeys>("rememberMe", Input, [], null, { type: "checkbox" })}
                {captcha && <img src={captcha} alt="" />}
                {captcha && createField<LoginFormValuesTypeKeys>("captcha", Input, [required], null)}

                {error && <div>{error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm)

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const Login: React.FC = () => {
    const captcha = useSelector((state: AppStateType) => { return state.auth.captcha })
    const isAuth = useSelector((state: AppStateType) => { return state.auth.isAuth })
    const dispatch = useDispatch()


    const onSubmit = (formData: LoginFormValuesType) => {
        let { email, password, rememberMe, captcha } = formData
        dispatch(login(email, password, rememberMe, captcha))
    }
    if (isAuth) {
        return <Redirect to={'/Profile'} />
    }
    return (
        <div>
            <div className="">Login</div>
            <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />

        </div>
    )
}
export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    email: string
}
type LoginFormOwnProps = {
    captcha: string | null
}


export default Login