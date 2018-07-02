import React, { Component } from 'react'

class Shelfchanger extends Component {
  render() {

  const {book,onChangeShelf} = this.props

  return (
    <div className="book-shelf-changer">
      <select ref={book.shelf} className="select-shelf" value={book.shelf} onChange={(event) => onChangeShelf(book, event.target.value)}>>
        <option value="test">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );

  }
}

export default Shelfchanger
