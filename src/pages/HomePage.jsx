import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductsPage from './ProductsPage';

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Sales Mastery Platform</p>
            <h1>Scale your sales confidence, scripts, and conversion rates.</h1>
            <p>
              Built to mirror high-performance coaching storefront experiences with
              a cleaner, faster modern React setup.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary">
                Explore Programs
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Why It Works
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="hero-media"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80"
              alt="Sales strategy team"
            />
          </motion.div>
        </div>
      </section>

      <section className="container section-heading">
        <h2>Featured Programs</h2>
        <p>Direct response inspired structure, upgraded for speed and design.</p>
      </section>

      <ProductsPage embedded />
    </>
  );
}

export default HomePage;
