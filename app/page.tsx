const projects = [
  {
    number: "01",
    year: "2026",
    title: "Research Interface",
    description:
      "A calm, legible interface for navigating dense research notes and connected ideas.",
    tags: ["Product design", "Frontend"],
    thumbnail: "photo",
    thumbnailLabel: "Image thumbnail",
  },
  {
    number: "02",
    year: "2025",
    title: "Personal Knowledge System",
    description:
      "An experiment in turning fragments, references, and daily observations into useful context.",
    tags: ["Interaction", "Prototype"],
    thumbnail: "graphic",
    thumbnailLabel: "Generated graphic",
  },
  {
    number: "03",
    year: "2025",
    title: "Spatial Notes",
    description:
      "A lightweight spatial canvas for thinking with words, images, and relationships.",
    tags: ["Web", "Creative tools"],
    thumbnail: "type",
    thumbnailLabel: "Typographic cover",
  },
];

const notes = [
  { date: "Aug 2026", title: "Building quiet interfaces for complex work" },
  { date: "May 2026", title: "Notes on personal software and small tools" },
  { date: "Feb 2026", title: "What makes a portfolio feel like a person?" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header page-shell">
        <a className="wordmark" href="#top" aria-label="Edward Park, home">
          Edward Park<span className="wordmark-dot">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#notes">Notes</a>
          <a href="mailto:hello@example.com">Contact ↗</a>
        </nav>
      </header>

      <section className="hero page-shell" id="top">
        <div className="eyebrow"><span /> Based in Seoul · Available for thoughtful work</div>
        <h1>
          I design and build
          <br />
          <span>clear digital experiences.</span>
        </h1>
        <div className="hero-bottom" id="about">
          <p>
            I’m Edward, a designer and developer interested in the space between
            technology, people, and everyday life. I make useful things with care.
          </p>
          <div className="hero-links">
            <a href="https://github.com/edipark">GitHub ↗</a>
            <a href="mailto:hello@example.com">Email ↗</a>
          </div>
        </div>
      </section>

      <section className="projects page-shell" id="projects">
        <div className="section-heading">
          <h2>Selected Projects</h2>
          <p>2025 — 2026</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-thumb thumb-${project.thumbnail}`}>
                {project.thumbnail === "photo" && (
                  <img
                    src="https://images.unsplash.com/photo-1705832567186-d0c628ea2c9b?auto=format&fit=crop&w=1400&q=85"
                    alt="Minimal building edge against a blue sky"
                  />
                )}
                {project.thumbnail === "graphic" && (
                  <div className="orbit-art" aria-hidden="true">
                    <i /><i /><i />
                  </div>
                )}
                {project.thumbnail === "type" && (
                  <div className="type-art" aria-hidden="true">
                    <span>SP</span>
                    <small>Spatial<br />Notes</small>
                  </div>
                )}
                <span className="thumb-label">{project.thumbnailLabel}</span>
              </div>
              <div className="project-copy">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="project-link" href="mailto:hello@example.com?subject=Project inquiry">
                  View project <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="notes page-shell" id="notes">
        <div className="section-heading">
          <h2>Recent Notes</h2>
          <p>Writing & observations</p>
        </div>
        <div className="note-list">
          {notes.map((note) => (
            <a href="mailto:hello@example.com?subject=Notes" key={note.title}>
              <time>{note.date}</time>
              <h3>{note.title}</h3>
              <span>Read ↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="page-shell">
        <div>
          <p>Have something in mind?</p>
          <a href="mailto:hello@example.com">Let’s talk ↗</a>
        </div>
        <div className="footer-meta">
          <span>© 2026 Edward Park</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
