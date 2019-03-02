import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Search from './Search';
import SearchResults from './SearchResults';

class App extends Component {
  state = {
    searchResults : []
  }
  handleSearchClick = searchTerm => {
    console.log(`Search Term: ${searchTerm}`);
    axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`)
      .then(response => this.setState({searchResults: response.data.items}))
      .catch(error => {
        console.log(error);
        alert(`Please check network connection.`);
      });
  }
  render() {
    return (
      <div className="App">
        <Search title='Git Repo Search Filter' onClickHandler={this.handleSearchClick} />
        {this.state.searchResults.length > 0 ? <SearchResults title='Repo Search Result' data = {this.state.searchResults} /> : null}
      </div>
    );
  }
}

export default App;
