import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Propuesta from '../pages/Propuesta';
import ApoyoEscolar from '../pages/Apoyo-escolar';
import Talleres from '../pages/Talleres';
import SaludIntegral from '../pages/Salud-integral';
import ScrollToTop from '../components/ScrollToTop';
import Contacto from '../pages/Contacto';
import Gracias from '../components/Gracias';

// Importa tus páginas (ajustá las rutas según tus archivos en /pages)
// import Home from '../pages/Home';
// import Servicios from '../pages/Servicios';

const Layout = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="layout-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        <main className="main-content" style={{ flex: 1 }}>
          <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<Home />} />
            <Route path="/Propuesta" element={<Propuesta />} />
            <Route path="/ApoyoEscolar" element={<ApoyoEscolar />} />
            <Route path="/Talleres" element={<Talleres/>}/>
            <Route path="/Salud-integral" element={<SaludIntegral/>} />
            <Route path="/Contacto" element={<Contacto/>} />
            <Route path="/Gracias" element={<Gracias />} />
            
            {/* Ruta para manejar errores 404 */}
            <Route path="*" element={<div>Página no encontrada</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;