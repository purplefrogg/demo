import React from 'react';
import './App.scss';
import Body from './components/Body/Body';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
	return (
			<div className="App">
				<div className="wrapper">
					<HeaderContainer />
					<Body />
				</div>
			</div>
	);
}

export default App;
