import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Form from'./Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Form/>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
// <React.StrictMode>
// <App />
// ///  <Child/>
// //</React.StrictMode>