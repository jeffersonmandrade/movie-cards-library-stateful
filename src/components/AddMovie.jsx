import React from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = (event) => {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState(INITIAL_STATE);
  };

  inputTitle() {
    const { title } = this.state;
    return (<input
      value={ title }
      type="text"
      id="title"
      name="title"
      data-testid="title-input"
      onChange={ this.handleChange }
    />);
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <input
        value={ subtitle }
        type="text"
        name="subtitle"
        data-testid="subtitle-input"
        id="subtitle"
        onChange={ this.handleChange }
      />
    );
  }

  inputImage() {
    const { imagePath } = this.state;
    return (
      <input
        value={ imagePath }
        type="text"
        id="image"
        name="imagePath"
        data-testid="image-input"
        onChange={ this.handleChange }
      />
    );
  }

  inputStoryLine() {
    const { storyline } = this.state;
    return (
      <input
        value={ storyline }
        name="storyline"
        type="text"
        id="textArea"
        data-testid="storyline-input"
        onChange={ this.handleChange }
      />
    );
  }

  inputRating() {
    const { rating } = this.state;
    return (
      <input
        value={ rating }
        name="rating"
        type="number"
        id="rating"
        data-testid="rating-input"
        onChange={ this.handleChange }
      />
    );
  }

  inputSelect() {
    const { genre } = this.state;
    return (
      <select
        name="genre"
        value={ genre }
        id="genre"
        data-testid="genre-input"
        onChange={ this.handleChange }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>);
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          {this.inputTitle()}
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          {this.inputSubtitle()}
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          {this.inputImage()}
        </label>
        <label htmlFor="textArea" data-testid="storyline-input-label">
          Sinopse
          {this.inputStoryLine()}
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          {this.inputRating()}
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          {this.inputSelect()}
        </label>
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>

    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
