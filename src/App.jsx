import Navbar from './components/Navbar'
import './App.css'

function App() {
  const projects = [
    {
      title: 'Smart Restaurant System',
      description:
        'A web-based restaurant ordering system with QR menus, table identification, cart management, order tracking, and an admin dashboard.',
      tech: ['Django', 'Python', 'JavaScript', 'SQLite'],
      github: 'https://github.com/binitapithakote/Restuarant-Management-App',
      demo: '#',
    },
    {
      title: 'Yahtzee Game',
      description:
        'A Yahtzee-style dice game built with Python and Pygame, featuring dice rolling, holding mechanics, scoring, and a bot opponent.',
      tech: ['Python', 'Pygame'],
      github: 'https://github.com/binitapithakote/Yahtzee-game',
      demo: '#',
    },
  ]

  const skills = [
    'Python',
    'C / C++',
    'JavaScript',
    'React',
    'Django',
    'HTML / CSS',
    'SQL',
    'Git / GitHub',
    'NumPy',
    'Pandas',
    'Scikit-learn',
    'Pygame',
  ]

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">COMPUTER ENGINEERING STUDENT</p>

            <h1>
              Building things,
              <br />
              <span>learning along the way.</span>
            </h1>

            <p className="hero-text">
              I'm Binita, a Computer Engineering student interested in artificial intelligence,
              software development, web technologies, and machine learning.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="code-card">
              <span className="code-line purple">const</span>{' '}
              <span className="code-line white">developer</span>{' '}
              <span className="code-line pink">=</span>
              <br />
              <span className="code-line blue">{"{"}</span>
              <br />
              <span className="indent">
                <span className="code-line purple">name:</span>{' '}
                <span className="code-line green">'Binita'</span>,
              </span>
              <br />
              <span className="indent">
                <span className="code-line purple">focus:</span>{' '}
                <span className="code-line green">'building'</span>,
              </span>
              <br />
              <span className="indent">
                <span className="code-line purple">coffee:</span>{' '}
                <span className="code-line orange">true</span>
              </span>
              <br />
              <span className="code-line blue">{"}"}</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">01 — ABOUT</p>
            <h2>A little about me.</h2>
          </div>

          <div className="about-grid">
            <div>
              <p className="large-text">
                I'm currently studying Computer Engineering and building my
                skills through projects, coursework, and experimentation.
              </p>

              <p>
                I enjoy turning ideas into working applications and
                understanding how things actually work behind the interface.
                My interests currently sit somewhere between web development,
                software engineering, and machine learning.
              </p>
            </div>

            <div className="about-info">
              <div className="info-item">
                <span>Education</span>
                <strong>B.E. Computer Engineering</strong>
              </div>

              <div className="info-item">
                <span>University</span>
                <strong>Purbanchal University</strong>
              </div>

              <div className="info-item">
                <span>Based in</span>
                <strong>Nepal 🇳🇵</strong>
              </div>

              <div className="info-item">
                <span>Currently</span>
                <strong>Building & Learning</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills">
          <div className="section-heading">
            <p className="eyebrow">02 — SKILLS</p>
            <h2>Tools I work with.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects">
          <div className="section-heading">
            <p className="eyebrow">03 — PROJECTS</p>
            <h2>Things I've built.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github}>GitHub ↗</a>
                    <a href={project.demo}>Live Demo ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education">
          <div className="section-heading">
            <p className="eyebrow">04 — EDUCATION</p>
            <h2>My academic journey.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div>
                <span className="timeline-date">CURRENT</span>
                <h3>B.E. Computer Engineering</h3>
                <p>Purbanchal University</p>
              </div>
            </div>
          </div>
        </section>

      <section id="contact" className="section contact">
  <p className="eyebrow">05 — CONTACT</p>

  <h2>
    Let's build
    <br />
    something <span>cool.</span>
  </h2>

  <p>
    Whether it's a project, internship opportunity, or just a
    conversation about technology, feel free to reach out.
  </p>

        <a
          href="mailto:binitapithakote@gmail.com"
          className="primary-button"
        >
          Say Hello ↗
        </a>

        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
      </main>

      <footer>
        <p>© 2026 Binita. Built with React.</p>
      </footer>
    </div>
  )
}

export default App