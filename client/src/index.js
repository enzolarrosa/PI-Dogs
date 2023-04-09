import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import store from './store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

// axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.baseURL= "https://pi-dogs-production-19be.up.railway.app"

ReactDOM.render(
  <Provider store={store} >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
