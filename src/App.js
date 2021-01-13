import React from 'react';
import './App.scss';
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<Body />
			</div>

		</div>

	);
}

export default App;
