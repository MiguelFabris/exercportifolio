import styles from './CardCentral.module.css';
import { FaHtml5, FaCss3Alt, FaReact, FaJs} from "react-icons/fa";
import { Link } from 'react-router-dom';

function CardCentral(){
    return(
        <div className={styles.cardCentral}>
            <Link to={"https://pt.wikipedia.org/wiki/HTML5"}><FaHtml5 className={styles.iconeHTML} alt="HTML 5"/></Link>
            <Link to={"https://pt.wikipedia.org/wiki/CSS3"}><FaCss3Alt className={styles.iconeCSS}/></Link>
            <Link to={"https://pt.wikipedia.org/wiki/JavaScript"}><FaJs className={styles.iconeJS}/></Link>
            <Link to={"https://pt.wikipedia.org/wiki/React_(JavaScript)"}><FaReact className={styles.iconeREACT}/></Link>
        </div>
    )
}

export default CardCentral;