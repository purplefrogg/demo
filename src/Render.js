import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage} from './redux/state'

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addMessage={addMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


export {rerender};
