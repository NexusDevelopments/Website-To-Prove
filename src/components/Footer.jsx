import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <h4>Mastery Of Sales</h4>
          <p>
            Cybersecurity sales systems, audiobooks, and execution frameworks
            built from real enterprise field experience.
          </p>
        </section>

        <section>
          <h4>Policies</h4>
          <nav className="footer-links" aria-label="Policy links">
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </section>

        <section>
          <h4>Connect</h4>
          <nav className="footer-links" aria-label="Social links">
            <a href="https://www.instagram.com/cybersecurity_sales/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/john-christian-5b20114/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>
        </section>
      </div>
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Mastery Of Sales. All rights reserved.</p>
        <p>Built with React and Shopify-ready commerce integration.</p>
        <p>Created by CrxxrDev</p>
      </div>
    </footer>
  );
}

export default Footer;
