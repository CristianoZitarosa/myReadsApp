import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import Shelves from './Shelves'

class App extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">

        <div className="list-books">

          <Header />

          <Shelves
            books={books}
            onChangeShelf={this.changeShelf} />

        </div>

      </div>
    )
  }// render ends

}// class ends

export default App
