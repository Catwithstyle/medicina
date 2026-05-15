import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ShareButton from './components/ShareButton';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PromotionsPage from './pages/PromotionsPage';
import TestimonialsPage from './pages/TestimonialsPage';

import ErrorBoundary from './components/ErrorBoundary';
import { LanguageProvider } from './context/LanguageContext';

// Scroll to top wrapper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<AboutPage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/promociones" element={<PromotionsPage />} />
              <Route path="/testimonios" element={<TestimonialsPage />} />
              {/* Fallback for other links or add more pages later */}
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
            <WhatsAppFloat />
            <ShareButton />
          </div>
        </Router>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
