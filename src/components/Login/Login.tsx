import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-Reducer';
import { AppStateType } from '../../redux/redux-store';
import { maxLength100, required } from '../../utils/validators/validators';
import { createField, GetStringKeys, Input } from '../common/FormsControls/FormsControls';


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
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        let { email, password, rememberMe, captcha } = formData
        props.login(email, password, rememberMe, captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'} />
    }
    return (
        <div>
            <div className="">Login</div>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />

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
type MapStatePropsType = {
    captcha: string | null
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, { login })(Login)