import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Passeios from './routes/Passeios';
import Translado from './routes/Translado'; 
import About from './components/About'; 
import Sobre from './routes/Sobre'; 
import ContactForm from './routes/ContactForm';
import NotFound from './routes/NotFound'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);
    
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

        {/* Rota para a página Sobre */}
        <Route path="/sobre" element={<Sobre />} />

        {/* Rota para a página de Contato */}
        <Route path="/contato" element={<ContactForm />} />

        {/* Rota 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
