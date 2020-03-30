import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {
  Link, Route, Switch
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import AddWard from "./components/AddWardPage";
import AddManager from "./components/AddManagerPage";
import PrivateRoute from "./components/PrivateRoute";

const client = new ApolloClient({
  uri: 'https://bed-tracking.gigalixirapp.com/api',
  fetch,
  request: (operation) => {
    const token = localStorage.getItem('apiToken')
    console.log('token in app', token)
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <PrivateRoute path="/" component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        {/* <Route path="/addhospital" component={AddWard} />
        <Route path="/addmanager" component={AddManager} /> */}
      </Switch>
      {/* <LoginPage /> */}
      {/* <Dashboard />  */}
    </ApolloProvider>
  );
}

export default App;
