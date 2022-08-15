import PropTypes from 'prop-types';
import { Event } from 'components/Event';
import css from './style.module.css';

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map(({ id, label, percentage, price, quantity }) => (
        <Event
          key={id}
          label={label}
          percentage={percentage}
          price={price}
          quantity={quantity}
        />
      ))}
    </div>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
};
