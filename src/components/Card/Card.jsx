import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleCardFavorite(id, isFavorite));
  };

  const remove = () => {
    dispatch(removeCard(id));
  };
  return (
    <li className={styles.card}>
      {title}
      <div>
        <button
          onClick={toggle}
          className={clsx(styles.favorite_button, isFavorite && styles.active)}
        >
          <span className='fa fa-star-o' />
        </button>
        <button onClick={remove} className={clsx(styles.remove_button)}>
          <span className='fa fa-trash' />
        </button>
      </div>
    </li>
  );
};

export default Card;
