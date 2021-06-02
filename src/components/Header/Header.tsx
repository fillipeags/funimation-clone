import { FiSearch } from 'react-icons/fi';
import styles from './styles.module.scss';
import logo from '../../assets/logo.svg';
import '../../styles/global.scss';

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <a href="/">
            <img src={logo} alt="" className={styles.logo} />
          </a>

          <nav>
            <a href="/">NOVIDADES</a>
            <a href="/">PROGRAMAS</a>
          </nav>

          <div className={styles.buttons}>
            <button type="button" id={styles.btn1}>
              TESTE PREMIUM PLUS
            </button>
            <button type="button" id={styles.btn2}>
              ENTRAR
            </button>
            <FiSearch size="20px" className={styles.FiSearch} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
