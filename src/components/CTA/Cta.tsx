import styles from './styles.module.scss';
import imgSempreMaisAnime from '../../assets/funimationCTA.png';
import '../../styles/global.scss';

const Cta: React.FC = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <h1>
          Os melhores <span>Animes</span>
        </h1>

        <p>
          Aproveite milhares de episódios legendados e exclusivamente dublados
          de animes selecionados, além de filmes, animes clássicos e as últimas
          novidades do Japão.
        </p>

        <button type="button">ASSISTA AGORA</button>

        <img src={imgSempreMaisAnime} alt="" />
      </div>
    </>
  );
};

export default Cta;
