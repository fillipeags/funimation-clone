import styles from './styles.module.scss';
import CardItem from './CardItem';

const CardsList: React.FC = () => {
  return (
    <>
      <div className={styles.cardlistContainer}>
        <h1>Novas Dublagens</h1>
        <CardItem />

        <h1>Em Alta</h1>
        <CardItem />

        <h1>Mais Populares</h1>
        <CardItem />

        <h1>Streaming Somente na Funimation</h1>
        <CardItem />

        <h1>O Que Assistir</h1>
        <CardItem />

        <h1>Explorar</h1>
        <CardItem />
      </div>
    </>
  );
};

export default CardsList;
