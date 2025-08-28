import styles from './Card.module.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaArrowRight} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Card({titulo, descricao, url}) {
    return(
        <section className={styles.card}>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5/>
                    <FaCss3Alt/>
                    <FaJs/>
                    <FaReact/>
                </div>
                <Link to={url} className={styles.card_button}><FaArrowRight/> </Link>
            </div>
        </section>
    )
}

export default Card;