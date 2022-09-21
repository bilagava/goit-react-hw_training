import React from 'react';
import style from './style.module.css';
import { v4 as uuidv4 } from 'uuid';

export const ShoppingCart = ({ items }) => {
  return (
    <ul>
      {items.map(({ item }) => (
        <li id={uuidv4()} className={style.item}>
          {item}
        </li>
      ))}
    </ul>
  );
};
