import styles from "./produtoscpr.module.css";
import Img from "../../assets/img/img1.png";
import Img2 from "../../assets/img/Mastercard.png";

const Produtos = () => {
  return (
    <section>
      <div className={styles.produtos}>
        <div className={styles.produtosContent}>
          <div className={styles.all}>
            <div className={styles.produtosImg}>
              <img src={Img} alt="" />
            </div>
            <div className={styles.produtosTxtAll}>
              <h1>Jogo De Cartas UNO® minimalista Preto - mattel</h1>
              <h2>
                R$79,99{" "}
                <span className={styles.produtosTemp}>
                  Acaba em: <span className={styles.temp}>01:34:45s</span>
                </span>
              </h2>
              <p className={styles.produtosTxt2}>
                Sobre este item:{" "}
                <span className={styles.produtosTxt}>
                  •Edição especial - visual completamente único.
                </span>{" "}
                <span className={styles.produtosTxt}>
                  • Minimalista - projetado com uma estética minimalista.
                </span>{" "}
                <span className={styles.produtosTxt}>
                  • Visual novo - visual totalmente novo, bonito e simplista
                  idealizado pelo designer warleson oliveira
                </span>{" "}
                <span className={styles.produtosTxt}>
                  • Jogo - o jogo é como o uno clássico, de 2 a 10 jogadores com
                  7 anos ou mais.
                </span>
              </p>
            </div>
            <div className={styles.produtosTxtAll2}>
              <div className={styles.txt2}>
                <h2>R$ 79,99</h2>
                <p>
                  Entrega GRÁTIS:{" "}
                  <span className={styles.span1}>
                    Segunda-feira, 29 de Janeiro.
                  </span>{" "}
                  Se pedir dentro de{" "}
                  <span className={styles.span2}>2 hrs 2 mins</span>
                </p>
                <p className={styles.pVermelho}>Em estoque</p>
                <div className={styles.Button}>
                  <a href="#">Comprar agora</a>
                </div>
                <div className={styles.produtosCard}>
                  <div className={styles.masterC}>
                    <img src={Img2} alt="" />
                    <div className={styles.txtCard}>
                      <h2>
                        Pagar com: <span>Cartão</span>
                      </h2>
                      <p>2567*</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Produtos;
