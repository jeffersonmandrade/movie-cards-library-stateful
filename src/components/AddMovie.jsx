import React from 'react';

class AddMovie extends React.Component {
  constructor(prop) {
    super(prop);
    state = { titulo: '' };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (

      <form data-testid="add-movie-form">
        <label
          htmlFor="titulo"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            id="titulo"
            name="title"
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" data-testid="subtitle-input" id="subtitle" />
        </label>
        <input type="text" />
        <input type="text" />
        <input type="text" />

      </form>

    );
  }
}

export default AddMovie;
