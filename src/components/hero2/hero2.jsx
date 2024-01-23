import styles from "./hero2.module.css";
import Seta from "../../assets/img/seta.svg";
import Img1 from "../../assets/img/img1.png";
import Img2 from "../../assets/img/img2.png";
import Img3 from "../../assets/img/img3.png";
import Img4 from "../../assets/img/img4.png";

const Hero2 = () => {
  return (
    <section>
      <div className={styles.hero_content}>
        <h2>Nossos novos modelos</h2>
        <a href="#">
          <p className={styles.p}>
            Ver todos <img src={Seta} alt="Seta" />
          </p>
        </a>
      </div>
      <div className={styles.img}>
        <div className={styles.img_hover}>
          <img src={Img1} alt="UNO" />
        </div>
        <div className={styles.img_hover}>
          <img src={Img2} alt="UNO" />
        </div>
        <div className={styles.img_hover}>
          <img src={Img3} alt="UNO" />
        </div>
        <div className={styles.img_hover}>
          <img src={Img4} alt="UNO" />
        </div>
      </div>
      <div className={styles.hp_content}>
        <div className={styles.txt_content}>
          <h2>
            UNO® minimalista <br /> <span>R$79,99 + Frete Grátis</span>
          </h2>
        </div>
        <div className={styles.txt_content}>
          <h2>
            UNO® Flip SIOC <br /> <span>R$99,99 + Frete Grátis</span>
          </h2>
        </div>
        <div className={styles.txt_content}>
          <h2>
            UNO® minimalista <br /> <span>R$19,90 Frete Grátis</span>
          </h2>
        </div>
        <div className={styles.txt_content}>
          <h2>
            UNO® minimalista <br /> <span>R$35,87 + Frete Grátis</span>
          </h2>
        </div>
      </div>
      <div className={styles.p}>
        <div className={styles.p_contagem}>
          <p>
            Acaba em <span>01:34:45s</span>
          </p>
          <button>
            <a href="#">Comprar</a>
          </button>
        </div>
        <div className={styles.p_contagem}>
          <p>
            Acaba em <span>01:34:45s</span>
          </p>
          <button>
            <a href="#">Comprar</a>
          </button>
        </div>
        <div className={styles.p_contagem}>
          <p>
            Acaba em <span>30:34:45s</span>
          </p>
          <button>
            <a href="#">Comprar</a>
          </button>
        </div>
        <div className={styles.p_contagem}>
          <p>
            Acaba em <span>30:34:45s</span>
          </p>
          <button>
            <a href="#">Comprar</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
