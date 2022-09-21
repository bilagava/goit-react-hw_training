import React, { Fragment } from 'react';
import style from './style.module.css';
import { Title } from './Title';
import { Text } from './Text';

export const Post = ({ title, text, link }) => {
  return (
    <Fragment>
      <Title ontitle={title} />
      <Text text={text} />
      <a href="https://alerts.in.ua" className={style.link}>
        {link}
      </a>
    </Fragment>
  );
};
