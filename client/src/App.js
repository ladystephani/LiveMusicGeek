import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

import React from "react";

import "./App.css";

const httpLink = createHttpLink({
  //in react 3000, so to use server's 3001, need to specify below:
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh"></div>
    </ApolloProvider>
  );
}

export default App;