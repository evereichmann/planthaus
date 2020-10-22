import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyC4XUFkqVVMACaUc9dJr_7v7THISfBkUGw',
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "planthaus-13436.firebaseapp.com",
  databaseURL: "https://planthaus-13436.firebaseio.com",
  projectId: "planthaus-13436",
  storageBucket: "planthaus-13436.appspot.com",
  messagingSenderId: "649876866393",
  appId: "1:649876866393:web:591f532df8e938a4f6f848",
  measurementId: "G-0MTGDEL1FK"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
