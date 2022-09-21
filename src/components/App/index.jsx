import { Post } from 'components/Post';
import { ShoppingCart } from '../ShoppingCart';
import style from './style.module.css';
import data from '../data.json';

export const App = () => {
  return (
    <div className={style.container}>
      <Post title="Post Header" text="Post text" link="alerts" />
      <ShoppingCart items={data} />
    </div>
  );
};
