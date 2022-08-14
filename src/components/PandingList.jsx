import Panding from './Panding';
import PropTypes from 'prop-types';

const PandingList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Panding
            label={item.label}
            percentage={item.percentage}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
};

PandingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default PandingList;
