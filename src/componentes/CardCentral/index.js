import styles from './CardCentral.module.css';
import CardCentralBanner from '../../assets/CardCentralBanner.png';

function CardCentral(){
    return(
        <div>
            <img className={styles.imagem} src={CardCentralBanner} alt="Logo HTML5" />
        </div>
    )
}

export default CardCentral;