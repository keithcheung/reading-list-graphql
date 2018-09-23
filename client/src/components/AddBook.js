import React, { Component } from 'react';
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from '../queries/queries';
import { graphql, compose } from 'react-apollo';

// making the query to GraphQL

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: ''
    };
  }

  displayAuthors() {
    let data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>Loading authors...</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, genre, authorId } = this.state;
    this.props.addBookMutation({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.onSubmit.bind(this)}>
        <div className="field">
          <label>Book Name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Genre: </label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Author</label>
          <select
            onChange={e => {
              this.setState({ authorId: e.target.value });
            }}
          >
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

// HAVE TO COMPOSE IN ORDER TO BOUND TWO QUERIES TO COMPONENT
export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
