import PropTypes from 'prop-types';
import dafautImage from '../5.png';

const Panding = ({ label, percentage, price, quantity }) => {
  return (
    <div>
      <img src={label ?? dafautImage} alt={percentage} width="480" />
      <h2>{percentage}</h2>
      <p>
        Автор: <a href={label}>{label}</a>
      </p>
      <p>Цена:{price} кредитов</p>
      <p>Доступность: {quantity < 20 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

Panding.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Panding;
