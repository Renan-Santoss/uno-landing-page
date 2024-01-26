import styles from "./footer.module.css";
import Logo from "../../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <div className={styles.txtLogo}>
            <div className={styles.footerImg}>
              <img src={Logo} alt="#" />
            </div>
            <div className={styles.footer_content}>
              <p>
                Esta edição especial do UNO®, o jogo de cartas adorado por
                todos, tem um visual totalmente exclusivo. Concebida com uma
                estética minimalista, essa versão é um grande presente para
                colecionadores de UNO®.
              </p>
            </div>
          </div>
          <div className={styles.footerEmail}>
            <div className={styles.footerContainer}>
              <p>
                Inscreva-se para saber de novidades do mundo uno. Se inscreva-se
                abaixo agora!
              </p>
            </div>
            <div className={styles.footerInp}>
              <input type="text" name="" placeholder="Digite seu Email..." />
              <button>
                <a href="#">Enviar</a>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.redeSociais}>
          <div className={styles.footerSociais}>
            <div className={styles.sociais}>
              <a href="#">
                <i className="fa-brands fa-instagram fa-2x"></i>
              </a>
            </div>
            <div className={styles.sociais}>
              <a href="#">
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>
            </div>
            <div className={styles.sociais}>
              <a href="#">
                <i className="fa-brands fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
          <div>
            <div className={styles.txt}>
              <p>© 2024 MATEL. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
