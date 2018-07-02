import React, { Component } from 'react'
import Book from './Book'

const shelves = [
  { "id": "currentlyReading", "label": "Currently Reading" },
  { "id": "wantToRead", "label": "Want to Read" },
  { "id": "read", "label": "Read" }
]

class Shelves extends Component {
  render() {

    const {books, onChangeShelf} = this.props

    return (

      <div className="list-books-content">
        {shelves.map((shelf) =>
          <div className="bookshelf" key={shelf.id}>
            <h2 className="bookshelf-title">{shelf.label}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {books.filter((book) => book.shelf === shelf.id).map((book) => (
                  <li key={book.id}>

              <Book books={books}
                book={book}
                onChangeShelf={onChangeShelf} />

                  </li>
                ))}
              </ol>



            </div>
          </div>
        )}
      </div>

    );
  }
}


export default Shelves
