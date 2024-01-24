import styles from "./hero3.module.css";
import Card1 from "../../assets/img/security.svg";
import Card2 from "../../assets/img/box.svg";
import Card3 from "../../assets/img/retrato.svg";
import Card4 from "../../assets/img/foguetinho.svg";

const Hero3 = () => {
  return (
    <section>
      <div className={styles.hero_container}>
        <div className={styles.txt}>
          <h2>Benefícios de jogar uno</h2>
          <p>
            Saiba mais sobres os benefícios de jogar uno com seus amigos e
            família
          </p>
        </div>
        <div className={styles.hero_wrapper}>
          <div className={styles.container}>
            <div className={styles.content}>
              <a href="#">
                <img src={Card1} alt="" />
              </a>
            </div>
            <span>Divirta-se com segurança.</span>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <a href="#">
                <img src={Card2} alt="" />
              </a>
            </div>
            <span>Pensamentos fora da caixinha.</span>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <a href="#">
                <img src={Card3} alt="" />
              </a>
            </div>
            <span>Ativa o seu lado criativo.</span>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <a href="#">
                <img src={Card4} alt="" />
              </a>
            </div>
            <span>Estimula o raciocínio rápido</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;
