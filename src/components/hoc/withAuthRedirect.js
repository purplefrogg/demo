import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) { return <Redirect to='/Login' /> }
            return (<Component {...this.props} />)
        }
    }

    let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connectedRedirectComponent
}
export default withAuthRedirect