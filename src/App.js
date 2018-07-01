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
      <div className="app"/>

    )
  }// render ends

}// class ends

export default App
