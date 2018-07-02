import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Header from './Header'
import Shelves from './Shelves'
import Searchpage from './Searchpage'

const shelves = [
  { 'id': 'currentlyReading', 'label': 'Currently Reading' },
  { 'id': 'wantToRead', 'label': 'Want to Read' },
  { 'id': 'read', 'label': 'Read' }
]

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
      <div className='app'>

        <div className='list-books'>

          <Header />

          <Route exact path='/' render={(history) => (
            <div>
              <Shelves
                books={books}
                shelves={shelves}
                onChangeShelf={this.changeShelf}
              />

              <div className='open-search'>
                <Link to='/search' className='search'>Browse catalog</Link>
              </div>

            </div>
            )} />

            <Route path='/search' render={(history) => (
              <div>
                <Searchpage
                  books={books}
                  onChangeShelf={this.changeShelf}
                />
              </div>
            )} />

        </div>

      </div>
    )
  }

}

export default App
