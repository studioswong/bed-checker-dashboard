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
  fetch,
  request: (operation) => {
    // const token = localStorage.getItem('token')
    const token = "SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAkODg2YWQ3YzAtNTAyNC00Mjk0LTkyOTctZWMxMjVhMWVjZmRlZAAGc2lnbmVkbgYA92v9InEB.ntCgSSOMwLhPXbgrXHJXF-BuoDlsSihiT881ieo7p2o"
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
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
