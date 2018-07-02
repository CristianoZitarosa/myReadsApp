import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchView extends Component {
  state = {
    query: '',
    books: []
  }

  searchBook = (query) => {
    this.setState({query})
    if(query) {
      BooksAPI.search(query).then((books) => {
        if(books.length) {
          this.setState({books})
        } else {
          this.setState({ books: [] })
        }
      })
    }
  }


render() {

  const {onChangeShelf} = this.props
  const {query, books} = this.state

  return (
    <div>
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <form>
          <div className="search-books-input-wrapper">
            <input type='text' placeholder='Search a book here...' value={query}
            onChange={(event) => this.searchBook(event.target.value)} />
          </div>
        </form>
      </div>
      {books.length!==0 && (
        <div className="search-books-books">
          <div className="search-books">
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book
                    onChangeShelf={onChangeShelf}
                    book={book}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
      {(books.length===0 && query.length!==0) && (
        <div className="search-books-results">
          {`Sorry no matches for your request.`}
        </div>
      )}
    </div>

  )
}

}

export default SearchView
