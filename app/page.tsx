const projects = [
  {
    title: "UMMA: University Mobile Management Agent",
    period: "Mar. 2026 - Jun. 2026",
    image: "/images/umma.jpg",
    imageAlt: "UMMA autonomous mobile management robot",
    description:
      "An autonomous building management robot integrating mobile manipulation, perception, and navigation.",
    tags: ["ROS 2", "YOLO", "SLAM", "Hardware Design"],
    links: [{ label: "Project", href: "https://umma-yonsei.github.io/" }],
  },
  {
    title: "SOLO: State Estimation with Only Leg Observation",
    period: "Dec. 2025 - Apr. 2026",
    image: "/images/solo.jpg",
    imageAlt: "SOLO DEXTRA GitHub project cover",
    description:
      "An IMU-free state estimator for bipedal locomotion using only the history of leg observations.",
    tags: ["Locomotion", "State Estimation", "Reinforcement Learning"],
    links: [
      { label: "Code", href: "https://github.com/edipark/SOLO_DEXTRA" },
      { label: "Repository", href: "https://github.com/edipark/SOLO" },
    ],
  },
  {
    title: "PALMA: A Robotic Hand",
    period: "Dec. 2025 - Feb. 2026",
    image: "/images/palma.jpg",
    imageAlt: "PALMA robotic hand following a human hand",
    description:
      "A tendon-actuated robotic hand built from scratch with vision-based teleoperation.",
    tags: ["Computer Vision", "Teleoperation", "Tendon Actuation"],
    links: [
      { label: "Demo", href: "https://youtube.com/shorts/w6RC1MFLB20" },
      { label: "Code", href: "https://github.com/edipark/PALMA_teleop" },
    ],
  },
  {
    title: "DEXTRA: A Low-Cost Humanoid",
    period: "Aug. 2025 - Jan. 2026",
    image: "/images/dextra.jpg",
    imageAlt: "DEXTRA motion imitation GitHub project cover",
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
  "Humanoid Locomotion",
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
          <a href="#projects">Projects</a>
          <a href="#publication">Publication</a>
          <a href="mailto:edi_park@yonsei.ac.kr">Contact</a>
        </nav>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <div className="portrait-wrap">
          <img className="portrait" src="/images/profile.jpg" alt="Sunghyun Park" />
        </div>
        <div className="intro-copy">
          <h1 id="intro-title">Sunghyun Park</h1>
          <p className="affiliation">B.E. Student, Mechanical Engineering · Yonsei University</p>
          <p>
            Hi! I am an undergraduate student in Mechanical Engineering at Yonsei University.
            I work on learning-based control for robots, with a focus on humanoid locomotion,
            manipulation, and whole-body control.
          </p>
          <p>
            I am currently an undergraduate researcher at the Machine Learning and Control
            Systems Laboratory, advised by Prof. Jongeun Choi. Previously, I was an intern at
            the Dynamic Robotic Systems Laboratory at Seoul National University.
          </p>
          <div className="profile-links" aria-label="Profile links">
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

      <section className="compact-section" aria-labelledby="interest-title">
        <h2 id="interest-title">Research Interests</h2>
        <div className="interest-list">
          {interests.map((interest) => <span key={interest}>{interest}</span>)}
        </div>
      </section>

      <section className="compact-section news" aria-labelledby="news-title">
        <h2 id="news-title">News</h2>
        <ul>
          <li><time>Aug. 2026</time><span>UMMA received the Grand Prize at Yonsei University&apos;s Course Outcome-based Idea Competition.</span></li>
          <li><time>Nov. 2025</time><span>Our team placed 3rd in the STEAMCUP IRC TurtleBot3 AutoRace.</span></li>
        </ul>
      </section>

      <section className="content-section" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Selected Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-item" key={project.title}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.imageAlt} />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-period">{project.period}</p>
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

      <section className="content-section" id="publication" aria-labelledby="publication-title">
        <h2 id="publication-title">Publication & Working Paper</h2>
        <article className="publication-item">
          <div className="publication-year">2026</div>
          <div>
            <h3>SOLO: State Estimation with Only Leg Observation for IMU-Free Bipedal Locomotion</h3>
            <p>Hyeonjung Kim, <strong>Sunghyun Park</strong>, and Hyungjun Jeon</p>
            <p className="venue">Working paper, in preparation.</p>
            <div className="item-links">
              <a href="https://github.com/edipark/SOLO" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </article>
      </section>

      <section className="content-section experience" aria-labelledby="experience-title">
        <h2 id="experience-title">Research Experience</h2>
        <div className="experience-item">
          <time>Nov. 2025 - Present</time>
          <div><h3>Machine Learning and Control Systems Laboratory</h3><p>Undergraduate Researcher · Yonsei University</p></div>
        </div>
        <div className="experience-item">
          <time>Jul. 2025 - Sep. 2025</time>
          <div><h3>Dynamic Robotic Systems Laboratory</h3><p>Undergraduate Intern · Seoul National University</p></div>
        </div>
      </section>

      <footer>
        <span>© 2026 Sunghyun Park</span>
        <span>Last updated Aug. 2026</span>
      </footer>
    </main>
  );
}
