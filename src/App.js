import React from 'react';
import './App.scss';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

const App = (props) => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<Body store={props.store}/>
			</div>

		</div>

	);
}

export default App;
