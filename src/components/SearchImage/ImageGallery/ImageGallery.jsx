import React from 'react';
import css from './style.module.css';

export const ImageGallery = () => {
  return (
    <ul className={css.gallery}>
      <imageGalleryItem />
    </ul>
  );
};
