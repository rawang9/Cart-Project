import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyzOe9jE8Eday_iNtrKBjCohSnzjw5oyw",
  authDomain: "cart-90b1f.firebaseapp.com",
  projectId: "cart-90b1f",
  storageBucket: "cart-90b1f.appspot.com",
  messagingSenderId: "1056454677807",
  appId: "1:1056454677807:web:21cd668889c497c3343dda"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

