import {GetAuthUserData} from '../../redux/auth-Reducer'
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount(){
        
        this.props.GetAuthUserData()
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
    GetAuthUserData
})(HeaderContainer)

