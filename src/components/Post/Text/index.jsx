import React, { Fragment } from 'react';
import style from './style.module.css';

export const Text = ({ text }) => {
  return (
    <Fragment>
      <p className={style.text}>{text}</p>
    </Fragment>
  );
};
