import React, { Component } from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// ApolloClient Set up
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Keith's Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
