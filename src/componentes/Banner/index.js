import styles from './Banner.module.css';

function Banner(){
    return(
        <div className={styles.bannerFundo}>
            <h1 className={styles.titulo}>
                Seja Bem-vindo ao meu portfólio!
            </h1>
            <p className={styles.paragrafo}>
                Meu nome é Miguel Olbera Fabris e te convido à ficar a vontade para  explorar os meus trabalhos e projetos desenvolvidos <br></br> 
                ao longo da minha jornada como desenvolvedor. Também, fique à vontade para entrar em contato comigo através das redes sociais.
            </p>
        </div>
    )
}

export default Banner;