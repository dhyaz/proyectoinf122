import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Home from './Danzas/Home';
import Morenada from './Danzas/Morenada';
import Caporales from './Danzas/Caporales';
import Diablada from './Danzas/Diablada';
import Macheteros from './Danzas/Macheteros';
import Moperas from './Danzas/Moperas';
import DanzaDelSolYDeLaLuna from './Danzas/DanzaDelSolYDeLaLuna';
import Chovena from './Danzas/Chovena';
import Pujllay from './Danzas/Pujllay';
import CuecaChuquisaqueña from './Danzas/CuecaChuquisaqueña';
import Bailecito from './Danzas/Baileceito';

const RedirectToHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return null;
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownStyle = {
    maxHeight: isOpen ? '100vh' : '0',
    transition: isOpen ? 'max-height 0.5s ease-in-out' : 'max-height 0s ease-in-out 0.5s',
    overflow: 'hidden',
  };

  return (
    <Router>
      <div>
        <header>
          <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <li onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={faBars} /> MENU DESPLEGABLE
            </li>
            <li>
              <h1>DANZAS DE BOLIVIA</h1>
            </li>
            <li>
              <Link to="/creditos">CREDITOS</Link>
            </li>
          </ul>
        </header>
        <nav>
          <div style={dropdownStyle}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/morenada">Morenada</Link></li>
            <li><Link to="/caporales">Caporales</Link></li>
            <li><Link to="/diablada">Diablada</Link></li>
            <li><Link to="/macheteros">Macheteros</Link></li>
            <li><Link to="/moperas">Moperas</Link></li>
            <li><Link to="/danzadelsolylaluna">Danza del Sol y de la Luna</Link></li>
            <li><Link to="/chovena">Chovena</Link></li>
            <li><Link to="/pujllay">Pujllay</Link></li>
            <li><Link to="/cuecachuquisaqueña">Cueca Chuquisaqueña</Link></li>
            <li><Link to="/bailecito">Bailecito</Link></li>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<RedirectToHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/morenada" element={<Morenada />} />
          <Route path="/caporales" element={<Caporales />} />
          <Route path="/diablada" element={<Diablada />} />
          <Route path="/macheteros" element={<Macheteros />} />
          <Route path="/moperas" element={<Moperas />} />
          <Route path="/danzadelsolylaluna" element={<DanzaDelSolYDeLaLuna />} />
          <Route path="/chovena" element={<Chovena />} />
          <Route path="/pujllay" element={<Pujllay />} />
          <Route path="/cuecachuquisaqueña" element={<CuecaChuquisaqueña />} />
          <Route path="/bailecito" element={<Bailecito />} />
          <Route path="/creditos" element={<Creditos />} />
        </Routes>

        <footer>
          <p>© 2023 Derechos de autor reservados</p>
        </footer>
      </div>
    </Router>
  );
};

const Creditos = () => (
  <div>
    <h2>Créditos</h2>
    <p>Aquí van los créditos.</p>
  </div>
);

export default App;
