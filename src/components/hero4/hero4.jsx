import styles from "./hero4.module.css";
import Img1 from "../../assets/img/img1.png";
import Img2 from "../../assets/img/img2.png";
import Img3 from "../../assets/img/img3.png";
import Img4 from "../../assets/img/img4.png";
import Img5 from "../../assets/img/Img5.png";
import Img6 from "../../assets/img/Img6.png";
import Img7 from "../../assets/img/Img7.png";
import Img8 from "../../assets/img/Img8.png";

const Hero4 = () => {
  return (
    <section>
      <div className={styles.hero_wrapper}>
        <div className={styles.hero_content}>
          <div className={styles.hero_txt}>
            <h2>Descobrir</h2>
            <a href="#">Filtrar</a>
          </div>
          <div className={styles.hero_container}>
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
          <div className={styles.hero_container}>
            <div className={styles.img}>
              <div className={styles.img_hover}>
                <img src={Img5} alt="UNO" width={298} />
              </div>
              <div className={styles.img_hover}>
                <img src={Img6} alt="UNO" width={298} />
              </div>
              <div className={styles.img_hover}>
                <img src={Img7} alt="UNO" width={298} />
              </div>
              <div className={styles.img_hover}>
                <img src={Img8} alt="UNO" width={298} />
              </div>
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
        </div>
        <div className={styles.button}>
          <a className={styles.button_e} href="#">
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
