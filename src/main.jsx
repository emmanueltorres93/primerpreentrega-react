import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from "react-router-dom"
import { initializeApp } from "firebase/app"
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyBJeDaYc_UO2NkDTuXsHum6wjE4sP2lBzo",
  authDomain: "coder-react-emmanuel-torres.firebaseapp.com",
  projectId: "coder-react-emmanuel-torres",
  storageBucket: "coder-react-emmanuel-torres.appspot.com",
  messagingSenderId: "635233013123",
  appId: "1:635233013123:web:5a38cfbd57e97aac28bab6"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <App />
     </BrowserRouter>
  </React.StrictMode>,
)