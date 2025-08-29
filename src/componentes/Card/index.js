import styles from './Card.module.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaArrowRight} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Card({titulo, descricao, url, linguagem}) {
    return(
        <section className={styles.card}>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                {linguagem === 'HTML' && <FaHtml5 style={{color: 'orange'}}/>}
                    {linguagem === 'CSS' && <FaCss3Alt style={{color: 'blue'}}/>}
                    {linguagem === 'JavaScript' && <FaJs style={{color: 'yellow'}}/>}
                    {linguagem === 'C#' && <TbBrandCSharp style={{color: 'purple'}}/>}
                    {titulo.toLowerCase().includes('react') && <FaReact style={{color: 'cyan'}}/>}
                </div>
                <Link to={url} className={styles.card_button}><FaArrowRight/> </Link>
            </div>
        </section>
    )
}

export default Card;