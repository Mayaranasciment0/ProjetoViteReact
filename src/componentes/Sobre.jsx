import { Link } from 'react-router-dom';
import './Sobre.css';
import react from '../assets/react.svg';

function Sobre() {
    return (
        <section>
            <header className="header-container">
                <div className="header-content">
                    <h1 className='titulo'>PRIMEIRO PROJETO REACT</h1>
                    <div className="imagem">
                        <a href="https://reacticon" target="_blank">
                            <img
                                src={react}
                                className="logo react react-icon"
                                alt="React logo"
                            />
                        </a>
                    </div>
                </div>
                <ul className='button'>
                    <li>
                        <button onClick={() => { window.location.href = '/' }}>Página principal</button>
                    </li>
                    <li>
                        <button onClick={() => { window.location.href = '/Ods' }}>ODS</button>
                    </li>
                </ul>
            </header>


            <div className="sobre-container">
                <h2 className="sobre-titulo"><span>Olá, meu nome é Mayara Nascimento</span></h2>
                <a href="https://reacticon" target="_blank"></a>

                <p>
                    Estou no segundo período no turna da manhã. Entrei neste curso através do embarque digital que é é um programa educacional
                    de fomento à formação de capital humano especializado na área de Tecnologia da Informação e Comunicação na Cidade de Recife.
                    Nunca fui muito próxima da área da tecnologia mas agora é uma área que me fascina e me surpreende a cada dia.
                </p>
                <p>
                    No meu tempo livre, gosto de ler, ter um tempo para mim, ir ao cinema e conhecer lugares com minha familia e amigos. Emsou alguém apaixonada por aprender,
                    criar e compartilhar experiências significativas com os outros. Estou sempre aberta a novas oportunidades de crescimento pessoal e profissional, e ansioso
                    para ver onde a jornada da vida me levará a seguir.
                </p>
            </div>
            <div className="sobre-icons">

            </div>
            <footer>
                <div className="sobre-redes-sociais">
                    <button className="sobre-botao">
                        <a href="https://github.com/Mayaranasciment0">
                           Acesse o GitHub
                        </a>
                    </button>
                    <button className="sobre-botao">
                        <a href="https://www.linkedin.com/in/mayarawyrlanascimento/">
                        Acesse o LinkedIn
                        </a>
                    </button>
                </div>
            </footer>

        </section>
    );
}

export default Sobre;
