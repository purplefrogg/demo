import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storeContext from './storeContext';


let rerender = (state) => {
  ReactDOM.render(
    
      <React.StrictMode>
        <storeContext.Provider value={store}>
        <App />
        </storeContext.Provider>
      </React.StrictMode>,
  document.getElementById('root')
  
  );

}

rerender(store.getState());

store.subscribe( () => {

  rerender(store.getState())
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
