import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/Store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);
//here we have imported our provider and wrap our parent component in provider so it can be globally available and we have provided our store here in provider.

reportWebVitals();
