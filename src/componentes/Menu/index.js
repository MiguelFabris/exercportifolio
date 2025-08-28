import styles from './Menu.module.css';
import MenuLink from '../MenuLink';
import meuNome from 'assets/LogoNome.png'; // Adjust the path as necessary

function Menu () {

    return(
        <header className={styles.cabecalho}>
                <img src={meuNome} />
            <nav className={styles.navegacao}>

                <MenuLink to='/'>
                    Home
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
                <MenuLink to="/projetos">
                    Projetos
                </MenuLink>     
            </nav>
        </header>
    )
}

export default Menu;