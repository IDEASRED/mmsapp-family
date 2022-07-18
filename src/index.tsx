/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './globalStyles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome/welcome.jsx';
import Tracking from './Tracking/tracking.jsx';
import reportWebVitals from './reportWebVitals';
import { UserDataContextProvider } from './context/userData-context.js';
import './i18n.js';

ReactDOM.render(
  <React.StrictMode>
    <UserDataContextProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/tracking/:id" element={<Tracking />} />
        </Routes>
      </BrowserRouter>
    </UserDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
