import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import animes from '../../database/mock.json';
import styles from './styles.module.scss';
import '../../styles/global.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const CardsList: React.FC = () => {
  return (
    <>
      <div className={styles.cardlistContainer}>
        <h1>Novas Dublagens</h1>
        <br />

        <section>
          <Swiper slidesPerView={6} setWrapperSize>
            <SwiperSlide className={styles.SwiperCards}>
              {animes.map(anime => (
                <img src={anime.image} key={anime.id} alt="img" />
              ))}
            </SwiperSlide>
          </Swiper>
        </section>

        <h1>Em Alta</h1>
        <br />

        <section>
          <Swiper slidesPerView={6} className="mySwiper">
            <SwiperSlide className={styles.SwiperCards}>
              {animes.map(anime => (
                <img src={anime.image} key={anime.id} alt="img" />
              ))}
            </SwiperSlide>
          </Swiper>
        </section>

        <h1>Mais Populares</h1>
        <br />

        <section>
          <Swiper slidesPerView={6} className="mySwiper">
            <SwiperSlide className={styles.SwiperCards}>
              {animes.map(anime => (
                <img src={anime.image} key={anime.id} alt="img" />
              ))}
            </SwiperSlide>
          </Swiper>
        </section>

        <h1>Streaming Somente na Funimation</h1>
        <br />

        <section>
          <Swiper slidesPerView={6} className="mySwiper">
            <SwiperSlide className={styles.SwiperCards}>
              {animes.map(anime => (
                <img src={anime.image} key={anime.id} alt="img" />
              ))}
            </SwiperSlide>
          </Swiper>
        </section>

        <h1>O Que Assistir</h1>
        <br />

        <section>
          <Swiper slidesPerView={6} className="mySwiper">
            <SwiperSlide className={styles.SwiperCards}>
              {animes.map(anime => (
                <img src={anime.image} key={anime.id} alt="img" />
              ))}
            </SwiperSlide>
          </Swiper>
        </section>

        <h1>Explorar</h1>
        <br />

        <section>
          <Swiper slidesPerView={6} className="mySwiper">
            <SwiperSlide className={styles.SwiperCards}>
              {animes.map(anime => (
                <img src={anime.image} key={anime.id} alt="img" />
              ))}
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default CardsList;
