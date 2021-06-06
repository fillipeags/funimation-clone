import Slider from 'react-slick';
import animes from '../../database/mock.json';
import settings from '../../utils/CardSettings';
import styles from './styles.module.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardItem: React.FC = () => {
  return (
    <section>
      <Slider
        className={styles.SwiperCards}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...settings}
      >
        {animes.map(anime => (
          <div className={styles.CardItem}>
            <img src={anime.image} key={anime.id} alt="img" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CardItem;
