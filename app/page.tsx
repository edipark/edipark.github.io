import { ThemeToggle } from "./theme-toggle";
import { PublicationImage } from "./publication-image";
import { interests, projects } from "./portfolio-data";

export default function Home() {
  return (
    <main className="site-shell" id="home">
      <header className="site-header">
        <a className="site-name" href="#home">Sunghyun Park</a>
        <nav aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#publication">Publication</a>
          <a href="#projects">Projects</a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer">CV</a>
          <ThemeToggle />
        </nav>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <div className="portrait-wrap">
          <img className="portrait" src="/images/profile.jpg" alt="Sunghyun Park" />
        </div>
        <div className="intro-copy">
          <h1 id="intro-title">Sunghyun Park</h1>
          <div className="interest-list name-tags">
            {interests.map((interest) => <span key={interest}>{interest}</span>)}
          </div>
          <p className="affiliation">B.E. Student, Mechanical Engineering · Yonsei University</p>
          <p>
            Hi! I am an undergraduate student in Mechanical Engineering at Yonsei University.
            I&apos;m interested in learning-based control for robots, with a focus on humanoid locomotion,
            manipulation, and whole-body control.
          </p>
          <p>
            I am currently an undergraduate researcher at the{" "}
            <a href="https://mlcs.yonsei.ac.kr/" target="_blank" rel="noreferrer">
              Machine Learning and Control Systems Laboratory
            </a>
            , advised by Prof. Jongeun Choi.
          </p>
          <div className="profile-links" aria-label="Profile links">
            <a href="/cv.pdf" target="_blank" rel="noreferrer">CV</a>
            <a href="https://github.com/edipark" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sunghyun-park-a141bb332/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com/@SunghyunPark-l3u" target="_blank" rel="noreferrer">YouTube</a>
          </div>
          <p className="contact-line">
            <a href="mailto:edi_park@yonsei.ac.kr">edi_park [at] yonsei.ac.kr</a>
            <span>Seoul, Korea</span>
            <span>Robotics · Control · AI</span>
          </p>
        </div>
      </section>

      <section className="content-section" id="publication" aria-labelledby="publication-title">
        <h2 id="publication-title">Publication & Working Paper</h2>
        <article className="publication-item">
          <PublicationImage src="/images/cohub.jpg" alt="CoHuB multi-humanoid collaboration benchmark" />
          <div className="publication-body">
            <div className="publication-year">2026</div>
            <h3>CoHuB: A Simulation Benchmark for Multi-Humanoid Collaboration</h3>
            <p>
              Hyunjin Park<sup>*</sup>, Jebeom Chae<sup>*</sup>, Minwoo Park<sup>*</sup>,{" "}
              <strong>Sunghyun Park</strong>, Hanjun Yoo, Seoyeon Choi, Soochul Yoo, Joohwan Seo,
              Sarmad Idrees, Jae-Sang Hyun, Jongmin Lee, Roberto Horowitz, Youngwoon Lee, Jongeun Choi
            </p>
            <p className="venue"><sup>*</sup> Co-first authors.</p>
            <p className="venue"><strong>Accepted to NeurIPS 2026 Robot Learning Workshop.</strong> Under review for ICLR 2027.</p>
            <div className="item-links">
              <a href="https://meat124.github.io/CoHuB/" target="_blank" rel="noreferrer">Project</a>
            </div>
          </div>
        </article>
        <article className="publication-item">
          <PublicationImage src="/images/JOSE_fig.png" alt="JOSE main figure" />
          <div className="publication-body">
            <div className="publication-year">2026</div>
            <h3>JOSE: Reconstructing Privileged State from Joint History
                  for Humanoid Motion Control</h3>
            <p><strong>Sunghyun Park</strong>, Hyeonjung Kim</p>
            <p className="venue">Submitted to ICRA 2027. Under review.</p>
            <div className="item-links">
              <a href="https://edipark.github.io/jose-humanoid/" target="_blank" rel="noreferrer">Project</a>
              <a href="https://github.com/edipark/jose-humanoid" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </article>
      </section>

      <section className="content-section" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Selected Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-item" key={project.title}>
              <div className="media-frame">
                <video
                  src={project.media.src}
                  aria-label={project.media.title}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-tags">{project.tags.join(" · ")}</p>
                <div className="item-links">
                  {project.links.map((link) => (
                    <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label}</a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Research Experience</h2>
        <div className="experience-item">
          <div className="institution-logo"><img src="/images/yonsei-logo.png" alt="Yonsei University logo" width="64" height="64" /></div>
          <div className="experience-details"><h3><a href="https://mlcs.yonsei.ac.kr/" target="_blank" rel="noreferrer">Machine Learning and Control Systems Laboratory</a></h3><p>Undergraduate Researcher · Yonsei University</p></div>
          <time>Nov. 2025 - Present</time>
        </div>
        <div className="experience-item">
          <div className="institution-logo"><img src="/images/snu-logo.png" alt="Seoul National University logo" width="64" height="64" /></div>
          <div className="experience-details"><h3>Dynamic Robotic Systems Laboratory</h3><p>Undergraduate Intern · Seoul National University</p></div>
          <time>Jul. 2025 - Sep. 2025</time>
        </div>
      </section>

      <footer>
        <span>© 2026 Sunghyun Park</span>
      </footer>
    </main>
  );
}
