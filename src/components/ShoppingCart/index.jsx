import React from 'react';
import style from './style.module.css';
import { nanoid } from 'nanoid';

export const ShoppingCart = ({ items }) => {
  return (
    <ul>
      {items.map(({ name }) => (
        <li key={nanoid()} className={style.item}>
          {name}
        </li>
      ))}
    </ul>
  );
};
