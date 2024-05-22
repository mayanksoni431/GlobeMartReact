import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./store_components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'tachyons'
import StoreBody from "./store_components/Body";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom";
import SalesMain from "./sales_components/SalesMain";
import StoreMain from "./store_components/StoreMain";
import App from "./App";
import App2 from "./App2";




ReactDOM.render(
    <div>
        <Router>
             <App2/>
        </Router>
    </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
