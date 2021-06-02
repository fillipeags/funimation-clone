import React from 'react';

import '../../styles/global.scss';
import styles from './styles.module.scss';
import animes from '../../database/mock.json';

const CardsList: React.FC = () => {
  return (
    <>
      <div className={styles.cardlistContainer}>
        <h1>Novas Dublagens</h1>
        <br />
        <div className={styles.showWrapper}>
          <section className={styles.showContainer}>
            {animes.map(anime => (
              <img src={anime.image} key={anime.id} alt="img" />
            ))}
          </section>
        </div>
        <br />
        <h1>Em Alta</h1>
        <br />
        <div className={styles.showWrapper}>
          <section className={styles.showContainer}>
            {animes.map(anime => (
              <img src={anime.image} key={anime.id} alt="img" />
            ))}
          </section>
        </div>
        <h1>Mais Populares</h1>
        <br />
        <div className={styles.showWrapper}>
          <section className={styles.showContainer}>
            {animes.map(anime => (
              <img src={anime.image} key={anime.id} alt="img" />
            ))}
          </section>
        </div>
        <br />
        <h1>Streaming Somente na Funimation</h1>
        <br />
        <div className={styles.showWrapper}>
          <section className={styles.showContainer}>
            {animes.map(anime => (
              <img src={anime.image} key={anime.id} alt="img" />
            ))}
          </section>
        </div>
        <br />
        <h1>O Que Assistir</h1>
        <br />
        <div className={styles.showWrapper}>
          <section className={styles.showContainer}>
            {animes.map(anime => (
              <img src={anime.image} key={anime.id} alt="img" />
            ))}
          </section>
        </div>
        <br />
        <h1>Explorar</h1>
        <br />
        <div className={styles.showWrapper}>
          <section className={styles.showContainer}>
            {animes.map(anime => (
              <img src={anime.image} key={anime.id} alt="img" />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default CardsList;
