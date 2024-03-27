import { Link } from 'react-router-dom'; // Importar o Link do react-router-dom
import './Ods.css';
import react from '../assets/react.svg';
import imagemods from '../assets/imagemods.jpg';
import ods15 from '../assets/ods15.jpg'

function Ods() {
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
                        <button onClick={() => { window.location.href = '/Sobre' }}>Sobre mim</button>
                    </li>
                </ul>
            </header>
            <section className='container'>
                <div className='contexto'>
                    <h2 className='titulo'>Objetivos de Desenvolvimento Sustentável</h2>
                    <p>
                        Os Objetivos de Desenvolvimento Sustentável (ODS) são uma série de 17 metas
                        globais estabelecidas pelas Nações Unidas em 2015 como parte da Agenda 2030
                        para o Desenvolvimento Sustentável. Esses objetivos abordam uma variedade de desafios
                        inter-relacionados, como pobreza, desigualdade, mudança climática, degradação ambiental,
                        paz e justiça.
                    </p>
                    <p>A Agenda 2030 busca não apenas acabar com a pobreza extrema, mas também garantir um desenvolvimento
                        equitativo e sustentável. Cada ODS possui metas específicas a serem alcançadas até 2030.
                        Esses objetivos são interconectados e complementares, reconhecendo a necessidade de uma abordagem
                        integrada para enfrentar os desafios globais.
                    </p>
                    <p>Eles fornecem um quadro abrangente para orientar políticas, práticas e investimentos em todo o mundo,
                        visando alcançar um desenvolvimento sustentável em todas as suas dimensões: econômica, social e ambiental.
                    </p>
                    <img
                        src={imagemods}
                        alt="logoods"
                        className="logoods"
                    />
                </div>
                <div className='container'>

                    <div className='ods15'>
                        <h2>ODS 15: Vida sobre a terra </h2>
                        <p>
                            O Objetivo da ODS 15 visa proteger,restaurar e promover o uso sustentável
                            dos ecossistemas terrestres, gerir as florestas de forma sustentável, combater
                            a desertificação,deter e reverter a degradação da terra e deter a perda de biodiversidade.
                        </p>
                        <p>
                            A vida terrestre é essencial para o bem-estar humano e a sobrevivência
                            de outras espécies. Cuidar dos ecossistemas terrestres, promover a
                            conservação da biodiversidade e restaurar áreas degradadas são
                            passos cruciais para alcançar um futuro sustentável para todos.
                        </p>
                        <p>
                            ODS 15 inclui metas específicas, como a proteção de áreas naturais,
                            a conservação de espécies ameaçadas de extinção, o combate à
                            exploração ilegal de recursos naturais e a promoção de práticas
                            agrícolas sustentáveis.
                        </p>
                        <p>
                            Contribuir para o alcance do ODS 15 é essencial para garantir a
                            saúde dos ecossistemas terrestres, a diversidade biológica e o
                            equilíbrio do planeta Terra.
                        </p>
                    </div>
                    <img
                        src={ods15}
                        alt="logoods"
                        className="imagemods15"
                    />

                </div>
            </section>
        </section>
    );
}

export default Ods;
