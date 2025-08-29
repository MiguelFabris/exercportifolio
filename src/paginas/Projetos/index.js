import Card from '../../componentes/Card';
import styles from './Projetos.module.css';
import { useEffect, useState } from 'react';
import { LuLoaderCircle } from "react-icons/lu";

function Projetos() {

    const [repositorios, setRespostiorios] = useState([])

    useEffect(() => {
        const buscaRepositorio = async () => {
            const resposta = ( await fetch ('https://api.github.com/users/MiguelFabris/repos'));
            const dados = await resposta.json();
            setRespostiorios(dados);
            } 
            buscaRepositorio()
        }, [])
        console.log(repositorios)

  return(
    <section className={styles.projeto}>
        <h1>Meus Projetos</h1>
        <section className={styles.lista}>
            {
                repositorios.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositorios.map((repos) =>(
                                <Card 
                                    key={repos.id}
                                    titulo={repos.name}
                                    descricao={repos.description}
                                    url={repos.html_url}
                                    linguagem={repos.language}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <div>
                        <p className={styles.textoCarregando}>Carregando Repositórios <div className={styles.loader}><LuLoaderCircle /></div></p>
                        
                    </div>
                )
            }
        </section>
    </section>
  )
}

export default Projetos;