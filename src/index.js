import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App2 from './make-up/app';
import { Provider } from 'react-redux';
import reducer from './make-up/reducer';
import { legacy_createStore } from 'redux';
const store = legacy_createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <> 
  <Provider store={store}>
    <App2 />
  </Provider>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();