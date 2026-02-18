function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Mastery Of Sales. All rights reserved.</p>
        <nav className="footer-links" aria-label="Policy links">
          <a href="https://masteryofsales.com/policies/terms-of-service" target="_blank" rel="noreferrer">
            Terms of Service
          </a>
          <a href="https://masteryofsales.com/policies/privacy-policy" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          <a href="https://masteryofsales.com/policies/refund-policy" target="_blank" rel="noreferrer">
            Refund Policy
          </a>
          <a href="/contact">Contact</a>
        </nav>
        <p>Built with React and Shopify-ready commerce integration.</p>
        <p>Created by CrxxrDev</p>
      </div>
    </footer>
  );
}

export default Footer;
