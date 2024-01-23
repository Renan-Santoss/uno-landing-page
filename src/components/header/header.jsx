import styles from "./header.module.css";
import Logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.header_wrapper}>
        <div>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        <div>
          <nav>
            <ul className={styles.ul_wrapper}>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Onde Encontrar</a>
              </li>
              <li>
                <a href="#">Novos Produtos</a>
              </li>
              <li>
                <a href="#">Creditos</a>
              </li>
            </ul>
          </nav>
        </div> 
        <div className={styles.button}>
            <a className={styles.button_e} href="#">Entrar</a>
            <a className={styles.button_c} href="#">Cadastre-se</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
