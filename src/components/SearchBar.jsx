// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <section>
        <label htmlFor="input" data-testid="text-input-label">
          Inclui o texto.
          <input
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="input"
          />
        </label>

        <form data-testid="search-bar-form">
          <label htmlFor="checkbox" data-testid="checkbox-input-label">
            Mostrar somente favoritos.
            <input
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              id="checkbox"
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="select" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="select"
              onChange={ onSelectedGenreChange }
              value={ selectedGenre }
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </section>

    );
  }
}

export default SearchBar;
