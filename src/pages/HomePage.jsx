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
            <p className="eyebrow">Mastery Of Sales</p>
            <h1>The Cybersecurity Sales System Built From the Solutions Architect Seat</h1>
            <p>
              25+ years. $250M+ in career revenue. Frameworks that win complex
              deals across federal, healthcare, and enterprise markets.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary">
                Browse the Audiobooks
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="hero-media"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <video
              src="https://masteryofsales.com/cdn/shop/videos/c/vp/49f01108956249b690173bc0cf86c50b/49f01108956249b690173bc0cf86c50b.HD-1080p-7.2Mbps-74252392.mp4?v=0"
              controls
              autoPlay
              muted
              loop
              playsInline
              aria-label="Mastery Of Sales introductory video"
            />
          </motion.div>
        </div>
      </section>

      <section className="container section-heading">
        <h2>Our Audio Books</h2>
        <p>Practical cybersecurity sales frameworks, audiobooks, and field-tested systems.</p>
      </section>

      <ProductsPage embedded />
    </>
  );
}

export default HomePage;
