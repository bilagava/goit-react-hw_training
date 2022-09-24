import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './style.module.css';
import png from '../searchCat.png';

class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.currentTarget.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.inputValue === '') {
      alert('Введите название');
      return;
    }

    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <header className={css.searchBar}>
        <form onSubmit={this.onFormSubmit} className={css.form}>
          <button type="submit" className={css.button}>
            <img src={png} />
            <span className={css.button_label}>Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

// SearchBar.prototype = {
//   onSubmit: PropTypes.func.isRequired };

export default SearchBar;
