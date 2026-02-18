function ContactPage() {
  return (
    <section className="container page-simple info-layout">
      <header className="page-header-block">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch with Mastery Of Sales</h1>
        <p>Questions about audiobooks, partnerships, or support? Reach out anytime.</p>
      </header>

      <div className="info-grid">
        <article className="info-card">
          <h2>Support & Media</h2>
          <p>Email: support@masteryofsales.com</p>
          <p>Instagram: @cybersecurity_sales</p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/john-christian-5b20114/" target="_blank" rel="noreferrer">John Christian</a>
          </p>
        </article>

        <article className="info-card subscribe-card">
          <h2>Subscribe to our emails</h2>
          <p>Be the first to know about new collections and exclusive offers.</p>
          <form className="subscribe-form" onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="Email" aria-label="Email" />
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default ContactPage;
