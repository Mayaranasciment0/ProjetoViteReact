import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

function Home() {
  return (
    <section className="container">
      <header className="header-container">
        <div className="header-content">
          <h1 className="titulo">PRIMEIRO PROJETO REACT</h1>
          <div className="logo-container">
            <Link to="https://reacticon" target="_blank">
              <img
                src={reactLogo}
                alt="React logo"
                className="logo react-icon"
              />
            </Link>
          </div>
        </div>
      </header>

      <div className="button-container">
        <ul className="button-link">
          <li>
          <button onClick={() => { window.location.href = 'Ods/' }}>ODS</button>
          </li>
          <li>
          <button onClick={() => { window.location.href = 'Sobre' }}>Sobre mim</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
