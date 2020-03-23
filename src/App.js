import React from 'react';
import { Maps } from './components/Maps'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import './App.css';

const client = new ApolloClient({
  uri: 'https://bed-tracking.gigalixirapp.com/api',
  fetch
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Maps />
    </ApolloProvider>
  );
}

export default App;
