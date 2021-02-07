import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-Reducer';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { inputElement } from '../common/FormsControls/FormsControls';

const input = inputElement("input")
const maxLength100 = maxLengthCreator(100)


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={"email"} component={input}
                    validate={[required, maxLength100]} placeholder={"login"} />
            </div>
            <div >
                <Field name={"password"} component={input} type="password"
                    validate={[required, maxLength100]} placeholder={"password"} />
            </div>
            <div>
                <Field component={input} type="checkbox"
                     name={"rememberMe"} />
                remember me
            </div>
            {props.error && <div>
                {props.error}
                </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        let { email, password, rememberMe } = formData
        props.login(email, password, rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/Profile'} />
    }
    return (
        <div>
            <div className="">Login</div>
            <LoginReduxForm onSubmit={onSubmit} />

        </div>
    )
}
const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)