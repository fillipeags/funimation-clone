import Slider from 'react-slick';
import animes from '../../database/mock.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss';
import '../../styles/global.scss';

const CardsList: React.FC = () => {
  return (
    <>
      <div className={styles.cardlistContainer}>
        <h1>Novas Dublagens</h1>
        <br />

        <section>
          <Slider
            infinite
            speed={500}
            slidesToShow={6}
            slidesToScroll={6}
            className={styles.SwiperCards}
          >
            {animes.map(anime => (
              <div className={styles.CardItem}>
                <img src={anime.image} key={anime.id} alt="img" />
              </div>
            ))}
          </Slider>
        </section>

        <h1>Em Alta</h1>
        <br />

        <section>
          <Slider
            infinite
            speed={500}
            slidesToShow={6}
            slidesToScroll={6}
            className={styles.SwiperCards}
          >
            {animes.map(anime => (
              <div className={styles.CardItem}>
                <img src={anime.image} key={anime.id} alt="img" />
              </div>
            ))}
          </Slider>
        </section>

        <h1>Mais Populares</h1>
        <br />

        <section>
          <Slider
            infinite
            speed={500}
            slidesToShow={6}
            slidesToScroll={6}
            className={styles.SwiperCards}
          >
            {animes.map(anime => (
              <div className={styles.CardItem}>
                <img src={anime.image} key={anime.id} alt="img" />
              </div>
            ))}
          </Slider>
        </section>

        <h1>Streaming Somente na Funimation</h1>
        <br />

        <section>
          <Slider
            infinite
            speed={500}
            slidesToShow={6}
            slidesToScroll={6}
            className={styles.SwiperCards}
          >
            {animes.map(anime => (
              <div className={styles.CardItem}>
                <img src={anime.image} key={anime.id} alt="img" />
              </div>
            ))}
          </Slider>
        </section>

        <h1>O Que Assistir</h1>
        <br />

        <section>
          <Slider
            infinite
            speed={500}
            slidesToShow={6}
            slidesToScroll={6}
            className={styles.SwiperCards}
          >
            {animes.map(anime => (
              <div className={styles.CardItem}>
                <img src={anime.image} key={anime.id} alt="img" />
              </div>
            ))}
          </Slider>
        </section>

        <h1>Explorar</h1>
        <br />

        <section>
          <Slider
            infinite
            speed={500}
            slidesToShow={6}
            slidesToScroll={6}
            className={styles.SwiperCards}
          >
            {animes.map(anime => (
              <div className={styles.CardItem}>
                <img src={anime.image} key={anime.id} alt="img" />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </>
  );
};

export default CardsList;
