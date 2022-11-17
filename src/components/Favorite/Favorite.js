import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector(getFavoriteCard);
  if (!cards.length)
    return <div className={styles.no_favorite_cards}>No Cards</div>;
  return (
    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
            id={card.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
