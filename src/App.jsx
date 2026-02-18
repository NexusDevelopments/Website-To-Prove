import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundPage from './pages/RefundPage';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const location = useLocation();
  const firstLoadRef = useRef(true);

  useEffect(() => {
    if (firstLoadRef.current) {
      firstLoadRef.current = false;
      return;
    }

    setPageLoading(true);
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search, location.hash]);

  return (
    <div className="app-shell">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      {pageLoading && (
        <div className="page-loader" role="status" aria-live="polite">
          <div className="page-loader-card">
            <div className="spinner" />
            <p>Loading page...</p>
          </div>
        </div>
      )}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/refund-policy" element={<RefundPage />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}

export default App;
