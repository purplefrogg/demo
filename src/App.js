import React from 'react';
import './App.scss';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

const App = (props) => {
	return (
		<div className="App">
			<div className="wrapper">
				<Header />
				<Body state={props.state} dispatch={props.dispatch}/>
			</div>

		</div>

	);
}

export default App;
