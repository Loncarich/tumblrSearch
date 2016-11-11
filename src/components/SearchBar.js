import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogQuery: '',
      tagQuery: '',
      errorMessage: ''
    }
  }

  setBlogQuery(e){
    const blogString= e.target.value;
    this.setState({blogQuery: blogString});
  }

  setTagQuery(e){
    const tagString= e.target.value;
    this.setState({tagQuery: tagString});
  }

  handleClick(){
    if (this.validateSearch(this.state.blogQuery, this.state.tagQuery)){
      var trimmedBlogQuery= this.state.blogQuery.trim().toLowerCase().split(' ').join(''),
      trimmedTagQuery= this.state.tagQuery.trim();
      this.props.fetchData(trimmedBlogQuery, trimmedTagQuery);
      this.setState({blogQuery: '', tagQuery: '', errorMessage: ''});
    }
  }

  validateSearch(blogQuery, tagQuery){
    var blogCheck= blogQuery.replace(/\s/g, ''),
    tagCheck= tagQuery.replace(/\s/g, '');

    if (blogQuery.length === 0 && tagQuery.length === 0){
      this.setState({errorMessage: 'Please enter a Blog Name or Tag'})
      return false;
    }else if (blogCheck.length === 0 && blogQuery.length > 0){
      this.setState({errorMessage: 'Blog Name cannot contain only spaces'})
      return false;
    }else if (tagCheck.length === 0 && tagQuery.length > 0){
      this.setState({errorMessage: 'Tag name cannot contain only spaces'})
      return false;
    }
    return true;
  }

  render (){
    return (
      <div className= 'search-bar'>
        <div className= 'search-bar-input-wrapper'>
          <div>Blog Name:</div>
          <input
            id="form-control"
            type="text"
            placeholder="Enter Blog Name"
            value={this.state.blogQuery}
            onChange={(e) => this.setBlogQuery(e)}
          />
        </div>
        <div className= 'search-bar-input-wrapper'>
          <div>Tag:</div>
          <input
            id="form-control"
            type="text"
            placeholder="Enter Tag"
            value={this.state.tagQuery}
            onChange={(e) => this.setTagQuery(e)}
          />
        </div>
        <button onClick= {() => {this.handleClick()} }>
          Search
        </button>
        <div className= 'search-bar-error'>{this.state.errorMessage}</div>
      </div>
    );
  }
};

export default SearchBar;