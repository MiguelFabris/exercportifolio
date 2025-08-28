import styles from './Inicio.module.css';
import Banner from '../../componentes/Banner';
import CardCentral from '../../componentes/CardCentral';

function Inicio(){
    return(
        <div className={styles.inicioFundo}>
            <Banner />
            <main className={styles.inicioConteudo}>
                <h1 className={styles.titulo}>O objetivo é mostrar meu trabalhos ainda como estudante</h1>
                <p className={styles.paragrafo}>Ou seja, este é um espaço dedicado para compartilhar meus projetos e experiências.<br></br> &emsp;&emsp;&emsp;&emsp;Mas antes, gostaria de mostrar
                minhas principais habilidades, elas são:</p>
            </main>
            <div>
                <CardCentral />
            </div>
        </div>
    )
}

export default Inicio;