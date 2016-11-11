import React, { Component } from 'react';
import FavoritesList from './FavoritesList';
import ResultsList from './ResultsList';
import SearchBar from './SearchBar';
import fetchTumblr from '../api/fetchTumblr';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      favorites: [],
      hasSearched: false
    };
    this.fetchData= this.fetchData.bind(this);
    this.handleAddClick= this.handleAddClick.bind(this);
    this.handleRemoveClick= this.handleRemoveClick.bind(this);
  }

  fetchData(blogQuery, tagQuery) {
    const that= this;
    fetchTumblr(that, blogQuery, tagQuery);
  }

  handleAddClick(id){
    var result= this.state.results.filter((item) => {
      return item.id === Number(id);
    });
    if (this.state.favorites.indexOf(result[0]) === -1){
      var stateCopy= this.state.favorites.concat(result);
      this.setState({favorites: stateCopy});
    }
  }

  handleRemoveClick(id){
    var result= this.state.favorites.filter((item) => {
      return item.id === Number(id);
    });
    var stateCopy= this.state.favorites.slice();
    stateCopy.splice(stateCopy.indexOf(result[0]), 1);
    this.setState({favorites: stateCopy});
  }

  render (){
    return (
      <div className='main'>
        <div className= 'main-wrapper'>
          <SearchBar fetchData= {this.fetchData}/>
          <ResultsList results= {this.state.results}
                       handleAddClick= {this.handleAddClick}
                       hasSearched= {this.state.hasSearched}
          />
        </div>
        <FavoritesList favorites= {this.state.favorites} handleRemoveClick= {this.handleRemoveClick}/>
      </div>
    );
  }
};

export default App;