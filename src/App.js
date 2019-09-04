import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginLayout from './layouts/LoginLayout/LoginLayout';
import { getAuthToken } from './utils/storageUtils';
import MainLayout from './layouts/MainLayout/MainLayout';
import env from './config/env';

const ProtectedRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props => getAuthToken() !== undefined ? <Component {...props} /> : <Redirect to="/login" />}
  />;

const App = () => (
  <Router basename={env === 'production' ? 'follothru-frontend' : ''}>
    <ProtectedRoute path="/app" component={MainLayout} />
    <Route path="/login" component={LoginLayout} />
  </Router>
);

export default App;
