import React from 'react';

import styles from './styles.module.scss';

import cardImg from '../../assets/cardImg.jpeg';

const CardsList: React.FC = () => {
  return (
    <>
      <div className={styles.cardlistContainer}>
        <h1>Novas Dublagens</h1>
        <br />

        <div className={styles.slider}>
          <div className={styles.showWrapper}>
            <section className={styles.showContainer}>
              <img src={cardImg} alt="" />
              <img src={cardImg} alt="" />
              <img src={cardImg} alt="" />
              <img src={cardImg} alt="" />
              <img src={cardImg} alt="" />
              <img src={cardImg} alt="" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsList;
