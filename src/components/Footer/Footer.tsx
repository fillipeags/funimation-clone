// import styles from './styles.module.scss';
import '../../styles/global.scss';
import styles from './styles.module.scss';
import logo from '../../assets/sonyLogo.png';

const Footer: React.FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.links}>
        <a href="/">Sobre a Funimation</a>
        <a href="/">Suporte ao Cliente</a>
        <a href="/">Termos de Uso</a>
        <a href="/">Política de Privacidade</a>
      </div>

      <div className={styles.foFooter}>
        <img src={logo} alt="" />
        <p>
          ©2017-21 Funimation Productions, LLC. Todos os direitos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer;
