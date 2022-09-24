import { Component } from 'react';

import PropTypes from 'prop-types';
import css from './style.module.css';

class Modal extends Component {
  render() {
    return (
      <div className={css.overlay} onClick={this.handleBackDropClick}>
        <div className={css.modal}>
          <img
            className={css.image}
            src={this.props.image}
            alt={this.props.tag}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
  tag: PropTypes.string,
};

export default Modal;
