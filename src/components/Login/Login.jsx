import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { authApi } from '../../api/api';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field name={"email"} component={"input"} placeholder={"login"} />
            </div>
            <div >
                <Field name={"password"} component={"input"} placeholder={"password"} />
            </div>
            <div>
                <Field component={"input"} type="checkbox" name={"rememberMe"}/>
                remember me
            </div>
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

const Login = () => {
    const onSubmit = (formData) =>{
        let {email, password, rememberMe} = formData
        authApi.login(email, password, rememberMe)
    }
    return (
        <div>
            <div className="">Login</div>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    )
}


export default Login