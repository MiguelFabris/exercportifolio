import styles from './Rodape.module.css';
import { FaInstagram, FaGithub, FaLinkedin, FaRegCopyright} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Rodape() {
    return(
        <footer className={styles.rodape}>
            <p><FaRegCopyright/> Todos os direitos reservados - Desenvolvido por Miguel Olbera Fabris</p>
            <div className={styles.rodapeRedes}>
                <Link to={"https://instagram.com/olbera_miguel"}><FaInstagram className={styles.redes}/></Link>
                <Link to={"https://github.com/MiguelFabris"}><FaGithub className={styles.redes}/></Link>
                <Link to={"https://www.linkedin.com/in/miguel-olbera-fabris-355386378/"}><FaLinkedin className={styles.redes}/></Link>
            </div>
        </footer>
    )
}

export default Rodape;