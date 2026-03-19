function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Sabin</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="tag">Computing Systems Student</p>
          <h1>Sabin Shrestha</h1>
          <h2>Aspiring Developer</h2>
          <p>
            Passionate about software development, modern web design,
            and solving real-world problems through practical digital solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/profile.jpeg" alt="Sabin Shrestha" />
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a BSc (Hons) Computing Systems student at Ulster University London
          with a strong interest in software development, front-end design,
          backend systems, and technology-focused problem solving. I enjoy
          building practical academic and personal projects while continuously
          improving my skills.
        </p>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        <div className="card">
          <h3>BSc (Hons) in Computing Systems</h3>
          <p>Ulster University London | February 2024 – Present</p>
        </div>
        <div className="card">
          <h3>Higher Secondary Education in Science</h3>
          <p>Kathmandu Bernhardt College, Nepal | 2019 – 2021</p>
          <p>Academic honors</p>
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Work Experience</h2>
        <div className="card">
          <h3>Pizza Chef</h3>
          <p>Japes, London | Jan 2024 – Present</p>
        </div>
        <div className="card">
          <h3>Bartender</h3>
          <p>Nepal Bar Training Academy | Apr 2022 – Oct 2023</p>
        </div>
        <div className="card">
          <h3>Barista</h3>
          <p>The Coffee Beans, Kathmandu | Sep 2021 – Feb 2022</p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="grid">
          <div className="card">
            <h3>Technical Skills</h3>
            <p>Python, HTML, CSS, JavaScript, Basic Backend Development</p>
          </div>
          <div className="card">
            <h3>Professional Skills</h3>
            <p>Problem Solving, Teamwork & Communication, Time Management</p>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <h2>Services</h2>
        <div className="grid">
          <div className="card">Front-End Web Development</div>
          <div className="card">Python Programming Support</div>
          <div className="card">Basic Full-Stack Projects</div>
          <div className="card">Academic / Small-Scale Project Assistance</div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Wireshark Network Analysis</h3>
            <p>Analysed a TCP SYN flood attack and identified malicious traffic.</p>
          </div>
          <div className="card">
            <h3>Java Card Game</h3>
            <p>Developed a game with logic and user interaction.</p>
          </div>
          <div className="card">
            <h3>Web Development Projects</h3>
            <p>Built responsive websites using HTML, CSS, and JavaScript.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: sabinshrest2023@gmail.com</p>
        <p>Location: London, United Kingdom</p>
        <p>LinkedIn: Add your profile link</p>

        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Sabin Shrestha. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App