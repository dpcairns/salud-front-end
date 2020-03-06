import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <form className='searchbar' onSubmit={this.props.handleSearch}>
        <input
          value={this.props.searchQuery}
          onChange={this.props.handleChange}
        />
        <button className='search-btn'>Find a drink</button>
      </form>
    );
  }
}