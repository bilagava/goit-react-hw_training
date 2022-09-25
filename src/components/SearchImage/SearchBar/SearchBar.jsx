import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './style.module.css';

class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = evt => {
    this.setState({ inputValue: evt.currentTarget.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
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
            <span className={css.button_label}>Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.protoType = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
