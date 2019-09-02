import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginLayout from './layouts/LoginLayout/LoginLayout';
import { getAuthToken } from './utils/storageUtils';
import MainLayout from './layouts/MainLayout/MainLayout';

const ProtectedRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props => getAuthToken() !== undefined ? <Component {...props} /> : <Redirect to="/login" />}
  />;

const App = () => (
  <Router>
    <ProtectedRoute path="/app" component={MainLayout} />
    <Route path="/login" component={LoginLayout} />
  </Router>
);

export default App;
