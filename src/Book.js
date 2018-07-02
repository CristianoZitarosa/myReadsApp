import React, { Component } from 'react'
import Shelfchanger from './Shelfchanger'

class Book extends Component {
  render() {

    const {book, onChangeShelf} = this.props

    return (

      <div className='book'>
        <div className='book-top'>
          {book.imageLinks && <div className='book-cover' style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>}
          {!book.imageLinks && <div className='book-cover' />}

          <Shelfchanger
            book={book}
            onChangeShelf={onChangeShelf} />

        </div>
        {book.title && <div className='book-title'>{book.title}</div>}
        {book.authors && <div className='book-authors'>{book.authors}</div>}

      </div>

    );
  }
}

export default Book
