import React from 'react';
import style from './style.module.css';

export const Title = ({ ontitle }) => {
  return (
    <>
      <h2 className={style.title}>{ontitle}</h2>
    </>
  );
};
