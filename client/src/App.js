import './App.css';
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery} from '@apollo/client';
//Comps
import DisplayData from './components/DisplayData';

function App() {
  //Apollo Client config
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
  });

  //Fetch data from Apollo
  

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List of Users</h1>
        <DisplayData/>
      </div>
    </ApolloProvider>
  );
}

export default App;
