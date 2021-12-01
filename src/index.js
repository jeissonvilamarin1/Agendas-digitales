import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from './routers/AppRouter';
import './styles/index.css'

ReactDOM.render(
    <AppRouter />,
  document.getElementById('root')
);
