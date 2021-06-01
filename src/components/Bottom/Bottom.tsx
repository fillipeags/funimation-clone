import styles from './styles.module.scss';
import imgSempreMaisAnime from '../../assets/funimationCTA.png';
import '../../styles/global.scss';

const Bottom: React.FC = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <h1>
          Animes Sem Anúncios <span>com Premium Plus </span>por 24,90 ao mês
        </h1>

        <p>
          Aproveite milhares de episódios legendados e exclusivamente dublados
          de animes selecionados, além de filmes, e encontre sucessos, clássicos
          e as últimas novidades do Japão.
        </p>

        <button type="button">TESTAR AGORA</button>

        <img src={imgSempreMaisAnime} alt="" />
      </div>
    </>
  );
};

export default Bottom;
