import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {
  Link, Route, Switch
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";

const client = new ApolloClient({
  uri: 'https://bed-tracking.gigalixirapp.com/api',
  fetch
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
