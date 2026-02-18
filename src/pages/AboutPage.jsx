function AboutPage() {
  return (
    <section className="container page-simple info-layout">
      <header className="page-header-block">
        <p className="eyebrow">About</p>
        <h1>Mastery Of Sales</h1>
        <p>
          Practical cybersecurity sales systems built from the Solutions Architect
          seat for professionals who want repeatable execution frameworks.
        </p>
      </header>

      <div className="info-grid">
        <article className="info-card">
          <h2>Built for Real-World Selling</h2>
          <ul>
            <li>Frameworks for discovery, demos, objections, and buyer alignment.</li>
            <li>Sector-aware strategies across federal, healthcare, and enterprise.</li>
            <li>AI-supported workflows for preparation and deal acceleration.</li>
          </ul>
        </article>

        <article className="info-card">
          <h2>Why Mastery Of Sales</h2>
          <ul>
            <li>Created from 25+ years of cybersecurity sales experience.</li>
            <li>Focused on execution, not motivational fluff.</li>
            <li>Designed for AEs, SEs, Solutions Architects, and technical sellers.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;
