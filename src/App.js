import React from 'react';
import {  HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { initializeApp } from './redux/app-Reducer'
import NewsConteiner from './components/Body/News/NewsConteiner';
import HeaderContainer from './components/Header/HeaderContainer';

import style from './App.module.scss'
import Navbar from './components/Body/Navbar/Navbar';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import Preloader from './components/common/Preloader/preloader';
import store from './redux/redux-store'
import withSuspense from './components/hoc/withSuspense';
const MessengerConteiner = React.lazy(() => import('./components/Body/Messenger/MessengerConteiner'));
const UsersConteiner = React.lazy(() => import('./components/Body/Users/UsersConteiner'));
const ProfileConteiner = React.lazy(() => import('./components/Body/Profile/ProfileConteiner'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {
	catchAllUnhandledErrors = (reason, promise) =>{
		alert(reason)
	}
	componentDidMount() {
		this.props.initializeApp()
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}
	componentWillUnmount(){
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className={style.wrapper}>
				<HeaderContainer />
				<div className={style.body}>
					<Navbar />
					<div className={style.content}>
						<Switch>
						<Route exact path='/' render={() => { return <Redirect to={'/Profile'}/>}} />
						<Route path='/Messenger' render={withSuspense(MessengerConteiner)}/>
						<Route path='/Users' render={withSuspense(UsersConteiner)} />
						<Route path='/News' render={() => <NewsConteiner />} />
						<Route path='/Login' render={withSuspense(Login)} />
						<Route path='/Profile/:userId?' render={withSuspense(ProfileConteiner)} />
						<Route path='/Friends' render={() => { }} />
					
						<Route path='*' render={() => { return <div>404 not found</div>}} />
						
						</Switch>
					</div>

				</div>
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }),
)(App)

const MainApp = (props) => {
	return (
		<HashRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</HashRouter>
	)
}
export default MainApp