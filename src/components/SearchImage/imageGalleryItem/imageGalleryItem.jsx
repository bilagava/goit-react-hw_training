import React, { Component } from 'react';
import css from './style.module.css';

class imageGalleryItem extends Component {
  render() {
    return (
      <li className={css.item}>
        <img className={css.itemImage} src="" alt="" />
      </li>
    );
  }
}

export default imageGalleryItem;
