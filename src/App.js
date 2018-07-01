import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (

      <div className="app">

        <div className="list-books">
          <div className="list-books-title">
            <h1 tabIndex="0">My Reads</h1>
          </div>
        </div>

      </div>

    )
  }// render ends

}// class ends

export default App
