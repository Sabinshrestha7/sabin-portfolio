import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Code2,
  Target,
  GraduationCap,
  Mail,
  MapPin,
  Linkedin,
  FolderOpen,
  Send,
  Laptop,
  Blocks,
  Gamepad2,
  Shield,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

function App() {
  const [activeInfo, setActiveInfo] = useState("");

  return (
    <>
      <nav className="navbar">
        <div className="logo">SS</div>
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
        <motion.div
          className="hero-text"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <div className="availability-badge">Available for opportunities</div>
          <h1>
            Hi, I&apos;m <span>Sabin</span>
            <br />
            <span>Shrestha</span>
          </h1>
          <p>
            Computing Systems student & aspiring developer crafting front-end
            and full-stack solutions at Ulster University London.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              <FolderOpen size={16} />
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/profile.jpeg" alt="Sabin Shrestha" />
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          title="About Me"
          subtitle="Get to know me a little better"
        />

        <div className="about-text">
          <p>
            I&apos;m Sabin Shrestha, currently pursuing a BSc (Hons) in
            Computing Systems at Ulster University London. My journey into tech
            started from a deep curiosity about how software shapes everyday life.
          </p>
          <p>
            I enjoy building both front-end and back-end systems, and I&apos;m
            constantly pushing myself to learn new frameworks and tools. Outside
            of academics, my diverse work experience has taught me teamwork,
            discipline, and adaptability — qualities I bring into every project
            I build.
          </p>
        </div>

        <div className="grid three-col">
          <div className="card feature-card">
            <div className="icon-box pink"><User size={18} /></div>
            <h3>Who I Am</h3>
            <p>
              A driven computing student at Ulster University London,
              passionate about using technology to solve real-world problems.
            </p>
          </div>

          <div className="card feature-card">
            <div className="icon-box blue"><Code2 size={18} /></div>
            <h3>What I Do</h3>
            <p>
              I build front-end interfaces and explore full-stack development
              using Python, JavaScript, HTML, and CSS.
            </p>
          </div>

          <div className="card feature-card">
            <div className="icon-box pink"><Target size={18} /></div>
            <h3>My Goal</h3>
            <p>
              To grow into a skilled software developer and contribute to
              meaningful projects in technology and cybersecurity.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="education"
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          title="Education"
          subtitle="My academic journey"
        />

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot pink"></div>
            <div className="timeline-card card">
              <span className="timeline-date">Feb 2024 - Present</span>
              <h3>BSc (Hons) Computing Systems</h3>
              <h4>Ulster University London</h4>
              <p>
                Studying core computing concepts including software development,
                networking, databases, and cybersecurity fundamentals.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot blue"></div>
            <div className="timeline-card card">
              <span className="timeline-date">2019 - 2021</span>
              <h3>Higher Secondary Education – Science</h3>
              <h4>Kathmandu Bernhardt College, Nepal</h4>
              <p>
                Completed with academic honors, building a strong analytical
                foundation in mathematics and science.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          title="Work Experience"
          subtitle="Transferable skills forged through diverse roles"
        />

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot pink"></div>
            <div className="timeline-card card">
              <span className="timeline-date">Jan 2024 - Present</span>
              <h3>Pizza Chef</h3>
              <h4>Japes, London</h4>
              <ul>
                <li>Time management & multitasking in fast-paced environment</li>
                <li>Team collaboration and communication</li>
                <li>Consistent quality delivery under pressure</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot pink"></div>
            <div className="timeline-card card">
              <span className="timeline-date">Apr 2022 - Oct 2023</span>
              <h3>Bartender</h3>
              <h4>Nepal Bar Training Academy</h4>
              <ul>
                <li>Customer service & interpersonal skills</li>
                <li>Attention to detail and problem-solving</li>
                <li>Working efficiently under pressure</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot blue"></div>
            <div className="timeline-card card">
              <span className="timeline-date">Sep 2021 - Feb 2022</span>
              <h3>Barista</h3>
              <h4>The Coffee Beans, Kathmandu</h4>
              <ul>
                <li>Adaptability and quick learning</li>
                <li>Customer-focused mindset</li>
                <li>Operational efficiency and workflow management</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          title="Skills"
          subtitle="Technical abilities & professional strengths"
        />

        <div className="skills-layout">
          <div className="skills-bars">
            <h3 className="mini-heading">Technical Skills</h3>

            <div className="skill-row">
              <div className="skill-top">
                <span>Python</span>
                <span>75%</span>
              </div>
              <div className="skill-bar"><div className="fill fill-75"></div></div>
            </div>

            <div className="skill-row">
              <div className="skill-top">
                <span>HTML</span>
                <span>85%</span>
              </div>
              <div className="skill-bar"><div className="fill fill-85"></div></div>
            </div>

            <div className="skill-row">
              <div className="skill-top">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div className="skill-bar"><div className="fill fill-80"></div></div>
            </div>

            <div className="skill-row">
              <div className="skill-top">
                <span>JavaScript</span>
                <span>70%</span>
              </div>
              <div className="skill-bar"><div className="fill fill-70"></div></div>
            </div>

            <div className="skill-row">
              <div className="skill-top">
                <span>Backend Development</span>
                <span>45%</span>
              </div>
              <div className="skill-bar"><div className="fill fill-45"></div></div>
            </div>
          </div>

          <div className="skills-tags">
            <h3 className="mini-heading">Professional Skills</h3>
            <div className="tags-wrap">
              <span className="tag-pill">Problem Solving</span>
              <span className="tag-pill">Teamwork & Communication</span>
              <span className="tag-pill">Time Management</span>
              <span className="tag-pill">Adaptability</span>
              <span className="tag-pill">Attention to Detail</span>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="services"
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          title="Services"
          subtitle="What I can help you with"
        />

        <div className="grid two-col">
          <div className="card service-card">
            <div className="icon-box blue"><Laptop size={18} /></div>
            <h3>Front-End Web Development</h3>
            <p>
              Building responsive, visually appealing websites and interfaces
              using HTML, CSS, and JavaScript.
            </p>
          </div>

          <div className="card service-card">
            <div className="icon-box pink"><Code2 size={18} /></div>
            <h3>Python Programming Support</h3>
            <p>
              Simple backend functionality, automation scripts, and
              problem-solving tasks using Python.
            </p>
          </div>

          <div className="card service-card">
            <div className="icon-box pink"><Blocks size={18} /></div>
            <h3>Basic Full-Stack Projects</h3>
            <p>
              Combining front-end interfaces with backend logic to deliver
              complete, functional applications.
            </p>
          </div>

          <div className="card service-card">
            <div className="icon-box yellow"><GraduationCap size={18} /></div>
            <h3>Academic Project Assistance</h3>
            <p>
              Helping design, build, and improve small-scale applications and
              student projects.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          title="Projects"
          subtitle="A selection of my academic and personal work"
        />

        <div className="grid three-col">
          <div className="card project-card top-blue">
            <div className="icon-box pink"><Shield size={18} /></div>
            <h3>Wireshark Network Analysis</h3>
            <p>
              Analysed a TCP SYN flood attack, identified malicious traffic
              patterns, and documented network security findings.
            </p>

            <div className="tech-tags">
              <button
                type="button"
                onClick={() =>
                  setActiveInfo(
                    "Wireshark is a network packet analysis tool used to inspect and troubleshoot traffic in detail."
                  )
                }
              >
                Wireshark
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveInfo(
                    "Networking involves communication between systems, protocols, packets, and traffic analysis."
                  )
                }
              >
                Networking
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveInfo(
                    "Cybersecurity focuses on protecting systems, networks, and data from attacks and threats."
                  )
                }
              >
                Cybersecurity
              </button>
            </div>
          </div>

          <div className="card project-card top-pink">
            <div className="icon-box pink"><Gamepad2 size={18} /></div>
            <h3>Java Card Game</h3>
            <p>
              Developed an interactive card game with game logic, scoring
              system, and user interaction using Java.
            </p>

            <div className="tech-tags">
              <button
                type="button"
                onClick={() =>
                  setActiveInfo(
                    "Java is an object-oriented programming language widely used for software and application development."
                  )
                }
              >
                Java
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveInfo(
                    "OOP stands for Object-Oriented Programming, a way of structuring code using classes and objects."
                  )
                }
              >
                OOP
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveInfo(
                    "Game Logic controls the rules, flow, scoring, and interaction inside a game."
                  )
                }
              >
                Game Logic
              </button>
            </div>
          </div>

          <div className="card project-card top-blue">
            <div className="icon-box blue"><Code2 size={18} /></div>
            <h3>Web Development Projects</h3>
            <p>
              Built responsive websites and web applications using modern HTML,
              CSS, and JavaScript techniques.
            </p>

            <div className="tech-tags">
              <button
                type="button"
                onClick={() =>
                  setActiveInfo("HTML provides the structure and content of a webpage.")
                }
              >
                HTML
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveInfo("CSS controls the styling, layout, and visual design of a webpage.")
                }
              >
                CSS
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveInfo("JavaScript adds interactivity and dynamic behavior to websites.")
                }
              >
                JavaScript
              </button>
            </div>
          </div>
        </div>

        {activeInfo && (
          <div className="topic-info-box">
            <p>{activeInfo}</p>
            <button
              type="button"
              className="close-info"
              onClick={() => setActiveInfo("")}
            >
              Close
            </button>
          </div>
        )}
      </motion.section>

      <motion.section
        id="contact"
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          title="Contact"
          subtitle="Let’s connect and build something together"
        />

        <div className="contact-layout">
          <div className="contact-info">
            <p>
              I&apos;m open to project collaborations, freelance opportunities,
              and connecting with fellow developers. Feel free to reach out.
            </p>

            <div className="contact-item">
              <div className="icon-box pink"><Mail size={16} /></div>
              <a href="mailto:sabinshrest2023@gmail.com">
                sabinshrest2023@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <div className="icon-box pink"><MapPin size={16} /></div>
              <span>London, United Kingdom</span>
            </div>

            <div className="contact-item">
              <div className="icon-box blue"><Linkedin size={16} /></div>
              <a
                href="https://www.linkedin.com/in/sabin-shrestha-809b5132b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <form
            className="contact-form card"
            action="https://formspree.io/f/xvzwlryn"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <input type="hidden" name="_subject" value="New portfolio message from Sabin's website" />
            <button type="submit" className="btn primary">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      <footer className="footer">
        <p>© 2026 <span>Sabin Shrestha</span>. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;