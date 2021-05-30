import Header from '../../components/Header/Header';

import styles from './styles.module.scss';

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <div className={styles.mainContent} />
    </>
  );
};

export default Home;
