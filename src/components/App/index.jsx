import { Post } from 'components/Post';
import { ShoppingCart } from 'components/ShoppingCart';
import MyClassComponent from 'components/MyClassComponent';
import style from './style.module.css';
import data from 'components/data.json';

export const App = () => {
  return (
    <div className={style.container}>
      <Post title="Post Header" text="Post text" link="alerts" />
      <ShoppingCart items={data} />
      <MyClassComponent />
    </div>
  );
};
