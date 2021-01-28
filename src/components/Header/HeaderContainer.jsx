import {setAuthUserData} from '../../redux/auth-Reducer'

import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authApi } from '../../api/api';

class HeaderContainer extends React.Component {
    debugger
    componentDidMount(){
        
        authApi.getAuthData()
        .then(response =>{
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data
                this.props.setAuthUserData(id, login, email)
            }
        })
    }

    render(){
        return <Header {...this.props}/>
    
    }
}

let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
      
})

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)

