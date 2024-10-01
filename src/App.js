import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Passeios from './components/Passeios';
import Translado from './components/Translado'; // Componente de translados
import About from './components/About'; // Componente 'Sobre Nós'
import Sobre from './components/Sobre'; // Componente de contato

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={
          <>
            <Hero />
            <Benefits />
            <About />
          </>
        } />

        {/* Rota para a página de Passeios */}
        <Route path="/passeios" element={<Passeios />} />

        {/* Rota para a página de Translado */}
        <Route path="/translado" element={<Translado />} />

        {/* Rota para a página de Contato */}
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
