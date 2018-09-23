import React, { Component } from 'react';
import { getBooksQuery } from '../queries/queries';
import { graphql } from 'react-apollo';

// making the query to GraphQL

class BookList extends Component {
  render() {
    return (
      <div id="book-details">
        <p>Output book details here</p>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
