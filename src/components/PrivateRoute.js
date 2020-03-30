import React from 'react';  
import { Redirect, Route } from 'react-router-dom';

// Utils
import LoginPage from './LoginPage';


const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('token nin private route', localStorage.getItem('apiToken'))
    return(
  <Route {...rest} render={props => (
    localStorage.getItem('apiToken') !== null ? (
        <Component {...props} />
    ) : (
        // <Redirect to='/login'/>
        <Route render={() => <LoginPage />} />
    ))} />)
};

export default PrivateRoute;  