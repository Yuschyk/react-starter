import React from 'react';

import ReactNotification from 'react-notifications-component';
import { Router } from 'react-router-dom';

import { browserHistory } from './browserHistory';
import { GlobalStyles } from './GlobalStyles';


export const App = ({ children }) => (
  <Router history={browserHistory}>
    <GlobalStyles />
    <ReactNotification />
    {children}
  </Router>
);
