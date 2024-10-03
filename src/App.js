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
        <Route path="/" element={
          <>
            <Hero />
            <Benefits />
            <About />
          </>
        } />

        <Route path="/passeios" element={<Passeios />} />

        <Route path="/translado" element={<Translado />} />

        <Route path="/sobre" element={<Sobre />} />

        <Route path="/contato" element={<ContactForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
