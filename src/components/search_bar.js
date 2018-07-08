import React, {Component} from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search-bar"><input
        onChange={(e) => {
        this.setState({term: e.target.value});
        this
          .props
          .onSearch(e.target.value)
      }}/></div>
    )
  }

  //  onInputChange(e){console.log(e.target.value);}
}

export default SearchBar;