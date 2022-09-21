import css from './style.module.css';
import React, { Component } from 'react';

class MyClassComponent extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const { step } = this.props;

    return (
      <div className={css.counter}>
        <button className={css.buttonClickMy} type="button">
          + {step}
        </button>
        <span className={css.number}>0</span>
        <button className={css.buttonClickMy} type="button">
          - {step}
        </button>
      </div>
    );
  }
}

export default MyClassComponent;
