import { logout } from '../../redux/auth-Reducer'
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';

type PropsType = {
    isAuth: boolean
    logout: () => void
  }
const HeaderContainer: FC<PropsType> = (props) => {
    return <Header {...props} />
}

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {
    logout,
})(HeaderContainer)

