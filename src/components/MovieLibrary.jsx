import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
  }

  handleClick() {

  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange=""
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange=""
          selectedGenre={ selectedGenre }
          onSelectedGenreChange=""
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleClick } />

      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(Object).isRequired,

};
export default MovieLibrary;
