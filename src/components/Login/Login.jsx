import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { login } from '../../redux/auth-Reducer';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { createField, inputElement } from '../common/FormsControls/FormsControls';

const input = inputElement("input")
const maxLength100 = maxLengthCreator(100)


const LoginForm = ({handleSubmit, error, captcha, ...props}) => {
    return (
        <form onSubmit={handleSubmit} >
            {createField("email",input, [required, maxLength100],"email")}
            {createField("password",input, [required, maxLength100],"password", {type:"password"})}
            remember me
            {createField("rememberMe", input, null,null, {type:"checkbox"})}
            {captcha &&  <img src={captcha} alt=""/>}
            {captcha &&  createField("captcha", input, [required], null)}
               
            {error && <div>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        let { email, password, rememberMe, captcha } = formData
        props.login(email, password, rememberMe, captcha)        
    }
    if(props.isAuth){
        return <Redirect to={'/Profile'} />
    }
    return (
        <div>
            <div className="">Login</div>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>

        </div>
    )
}
const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, { login })(Login)