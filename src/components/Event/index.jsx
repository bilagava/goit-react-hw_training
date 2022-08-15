// import { FaBeer } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './style.module.css';

export const Event = ({ label, percentage, price, quantity }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{label}</h2>
      <p className={css.info}>{percentage}</p>
      <p className={css.info}>{price}</p>
      <p className={css.info}>{quantity}</p>
    </div>
  );
};

Event.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
