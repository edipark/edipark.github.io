import { ThemeToggle } from "./theme-toggle";

type Media =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; title: string; poster?: string };

function MediaPreview({ media }: { media: Media }) {
  if (media.type === "video") {
    return (
      <video
        src={media.src}
        poster={media.poster}
        aria-label={media.title}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  return <img src={media.src} alt={media.alt} />;
}

const projects: Array<{
  title: string;
  media: Media;
  description: string;
  tags: string[];
  links: Array<{ label: string; href: string }>;
}> = [
  {
    title: "UMMA: University Mobile Management Agent",
    media: {
      type: "video",
      src: "/videos/umma.mp4",
      title: "UMMA project demonstration",
    },
    description:
      "An autonomous building management robot integrating mobile manipulation, perception, and navigation.",
    tags: ["ROS 2", "YOLO", "SLAM", "Hardware Design"],
    links: [{ label: "Project", href: "https://umma-yonsei.github.io/" }],
  },
  {
    title: "PALMA: A Robotic Hand",
    media: {
      type: "video",
      src: "/videos/palma.mp4",
      title: "PALMA project demonstration",
    },
    description:
      "A tendon-actuated robotic hand built from scratch with vision-based teleoperation.",
    tags: ["Computer Vision", "Teleoperation", "Tendon Actuation"],
    links: [
      { label: "Code", href: "https://github.com/edipark/PALMA_teleop" },
    ],
  },
  {
    title: "DEXTRA: A Low-Cost Humanoid",
    media: {
      type: "video",
      src: "/videos/dextra.mp4",
      title: "DEXTRA motion imitation GitHub project cover",
    },
    description:
      "A low-cost humanoid designed, fabricated, and trained for bipedal walking through motion imitation.",
    tags: ["Humanoid", "Motion Retargeting", "Isaac Gym"],
    links: [
      { label: "Code", href: "https://github.com/edipark/Mimickit_Dextra" },
      { label: "Hardware", href: "https://github.com/edipark/DEXTRA" },
    ],
  },
];

const interests = [
  "Robot Learning",
  "Learning-Based Control",
  "Humanoid Control",
  "Manipulation",
  "Whole-Body Control",
];

export default function Home() {
  return (
    <main className="site-shell" id="home">
      <header className="site-header">
        <a className="site-name" href="#home">Sunghyun Park</a>
        <nav aria-label="Main navigation">
          <a className="active" href="#home">Home</a>
          <a href="#publication">Publication</a>
          <a href="#projects">Projects</a>
          <a href="/CurriculumVitae.pdf" target="_blank" rel="noreferrer">CV</a>
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
            <a href="/CurriculumVitae.pdf" target="_blank" rel="noreferrer">CV</a>
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
          <div className="media-frame">
            <MediaPreview
              media={{
                type: "image",
                src: "/images/JOSE_fig.png",
                alt: "JOSE main figure",
              }}
            />
          </div>
          <div className="publication-body">
            <div className="publication-year">2026</div>
            <h3>JOSE: Joint Only State Estimation
                  for Whole-Body Control without an Inertial Unit</h3>
            <p>Hyeonjung Kim, <strong>Sunghyun Park</strong>, and Hyungjun Jeon</p>
            <p className="venue">Working paper, in preparation.</p>
            <div className="item-links">
              <a href="https://github.com/edipark/SOLO" target="_blank" rel="noreferrer">Code</a>
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
                <MediaPreview media={project.media} />
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
          <time>Nov. 2025 - Present</time>
          <div><h3><a href="https://mlcs.yonsei.ac.kr/" target="_blank" rel="noreferrer">Machine Learning and Control Systems Laboratory</a></h3><p>Undergraduate Researcher · Yonsei University</p></div>
        </div>
        <div className="experience-item">
          <time>Jul. 2025 - Sep. 2025</time>
          <div><h3>Dynamic Robotic Systems Laboratory</h3><p>Undergraduate Intern · Seoul National University</p></div>
        </div>
      </section>

      <footer>
        <span>© 2026 Sunghyun Park</span>
      </footer>
    </main>
  );
}
