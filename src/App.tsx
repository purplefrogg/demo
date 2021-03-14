import React from 'react';
import {  HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { initializeApp } from './redux/app-Reducer'
import NewsConteiner from './components/Pages/News/NewsConteiner';
import HeaderContainer from './components/Header/HeaderContainer';

import style from './App.module.scss'
import Navbar from './components/Pages/Navbar/Navbar';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import Preloader from './components/common/Preloader/preloader';
import store, { AppStateType } from './redux/redux-store'
import withSuspense from './components/hoc/withSuspense';
const MessengerConteiner = React.lazy(() => import('./components/Pages/Messenger/MessengerConteiner'));
const UsersConteiner = React.lazy(() => import('./components/Pages/Users/UsersConteiner'));
const ProfileConteiner = React.lazy(() => import('./components/Pages/Profile/ProfileConteiner'));
const Login = React.lazy(() => import('./components/Login/Login'));

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
	initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
	catchAllUnhandledErrors = (e: PromiseRejectionEvent) =>{
		alert('some error')
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
						<Route path='/Friends' render={() => null } />
					
						<Route path='*' render={() => { return <div>404 not found</div>}} />
						
						</Switch>
					</div>

				</div>
			</div>
		);
	}

}

const mapStateToProps = (state: AppStateType) => {
	return {
		initialized: state.app.initialized
	}
}

let AppContainer = compose<React.ComponentType>(
	withRouter,
	connect(mapStateToProps, { initializeApp }),
)(App)

const MainApp = () => {
	return (
		<HashRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</HashRouter>
	)
}
export default MainApp