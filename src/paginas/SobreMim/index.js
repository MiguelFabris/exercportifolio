import styles from './SobreMim.module.css';
import fotoSobreMim from '../../assets/minhafoto.png';

function SobreMim() {
    return(
        <div>
            <h3 className={styles.subtitulo}>Olá, eu sou o Miguel!</h3>

            <img src={fotoSobreMim} alt="Foto do miguel feliz" className={styles.fotoSobreMim}/>

            <p className={styles.paragrafo}>
                Sou estudante de Engenharia de Software e apaixonado por tecnologia. 
                Tenho interesse em desenvolvimento web, inteligência artificial e automação. 
                Estou sempre buscando aprender novas habilidades e aprimorar meus conhecimentos.<br></br>
                Neste blog, compartilho meus aprendizados, projetos e reflexões sobre o mundo da tecnologia. 
                Espero que você encontre aqui conteúdos interessantes e inspiradores!<br></br>
                Sinta-se à vontade para entrar em contato comigo através das minhas redes sociais ou e-mail. 
                Estou sempre aberto a novas conexões e colaborações!<br></br>
                Obrigado por visitar meu blog e espero que você aproveite o conteúdo!
            </p>
            
    </div>
    )
}

export default SobreMim;