import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { iconSize } from 'constans/iconSize';
import { formatEventStart } from 'utils/formatEventStart';
import css from './style.module.css';

export const Event = ({ label, percentage, price, type, start }) => {
  const formattedStart = formatEventStart(start);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{label}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.mm} />
        {percentage}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconSize.mm} />
        {price}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconSize.mm} />
        {formattedStart}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

Event.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  start: PropTypes.string.isRequired,
};
