import { logout } from '../../redux/auth-Reducer'
import React from 'react';
import { connect } from 'react-redux';
import { AppReducerType } from '../../redux/redux-store';
import Header from './Header';

type PropsType = {
    isAuth: boolean
    logout: () => void
  }
const HeaderContainer = (props: PropsType) => {
    return <Header {...props} />
}

let mapStateToProps = (state: AppReducerType) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {
    logout,
})(HeaderContainer)

