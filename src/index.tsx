import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// npm install redux react-redux react-thunk @types/react-redux
// npm install redux-thunk @types/redux-thunk

// if error in App than
// npm install @types/react
