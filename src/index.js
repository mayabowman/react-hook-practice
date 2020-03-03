import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App
    text={`And the stone walls of Harmony Hall bear witness
    Anybody with a worried mind could never forgive the sight
    Of wicked sakes inside a place you thought was dignified
    I don't wanna live like this, but I don't wanna die`}
    maxLength={35}
  />,
  document.getElementById('root'));


