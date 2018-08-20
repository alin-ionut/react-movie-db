import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
