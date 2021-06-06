import Slider from 'react-slick';
import animes from '../../database/mock.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss';
import '../../styles/global.scss';

const CardsList: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    sliesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          infinite: true,
          speed: 600,
          slidesToShow: 6,
          sliesToScroll: 1,
        },
      },
      {
        breakpoint: 1330,
        settings: {
          infinite: true,
          speed: 600,
          slidesToShow: 5,
          sliesToScroll: 1,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          infinite: true,
          speed: 600,
          slidesToShow: 4,
          sliesToScroll: 1,
        },
      },
      {
        breakpoint: 925,
        settings: {
          infinite: true,
          speed: 600,
          slidesToShow: 3,
          sliesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          infinite: true,
          speed: 600,
          slidesToShow: 1,
          sliesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.cardlistContainer}>
        <h1>Novas Dublagens</h1>
        <br />

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

        <h1>Em Alta</h1>
        <br />

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

        <h1>Mais Populares</h1>
        <br />

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

        <h1>Streaming Somente na Funimation</h1>
        <br />

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

        <h1>O Que Assistir</h1>
        <br />

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

        <h1>Explorar</h1>
        <br />

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
      </div>
    </>
  );
};

export default CardsList;
