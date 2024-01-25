import styles from "./hero.module.css";
import Caixa from "../../assets/img/Caixa.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroH1}>
          <h1>
            <span>UNO® minimalista, </span>
            representa uma excelente opção de presente para colecionadores
          </h1>
          <p>
            Esta edição especial do UNO®, o jogo de cartas adorado por todos,
            tem um visual totalmente exclusivo.
          </p>
          </div>
            <div className={styles.button}>
              <button className={styles.button_s}>
                <a href="#">Saiba Mais</a>
              </button>
              <button className={styles.button_o}>
                <a href="#">Onde encontrar</a>
              </button>
            </div>
        </div>
        <div className={styles.img}>
          <img src={Caixa} alt="uno" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
