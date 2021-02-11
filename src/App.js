import React from 'react';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import { initializeApp } from './redux/app-Reducer'
import MessengerConteiner from './components/Body/Messenger/MessengerConteiner';
import NewsConteiner from './components/Body/News/NewsConteiner';
import ProfileConteiner from './components/Body/Profile/ProfileConteiner';
import UsersConteiner from './components/Body/Users/UsersConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import style from './App.module.scss'
import Navbar from './components/Body/Navbar/Navbar';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import Preloader from './components/common/Preloader/preloader';
import store from './redux/redux-store'

class App extends React.Component {
	componentDidMount(){

        this.props.initializeApp()
	}
	render() {
		if(!this.props.initialized){
			return <Preloader />
		}
		
		return (
			<div className={style.wrapper}>
				<HeaderContainer />
				<div className={style.body}>
					<Navbar />
					<div className={style.content}>
						<Route path='/Messenger' render={() => <MessengerConteiner />} />
						<Route path='/Users' render={() => <UsersConteiner />} />
						<Route path='/News' render={() => <NewsConteiner />} />
						<Route path='/Login' render={() => <Login />} />
						<Route path='/Profile/:userId?' render={() => <ProfileConteiner />} />
						<Route path='/Friends' render={() => { }} />
					</div>

				</div>
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return  {
		initialized: state.app.initialized
	}
}

let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }),
)(App)

const MainApp = (props) =>{
	return(
	<HashRouter>
    <Provider store={store}>
	<AppContainer />
	</Provider>
    </HashRouter>
	)}
export default MainApp