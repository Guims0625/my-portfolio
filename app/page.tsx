import Image from "next/image";
import TerminalHero from "./components/TerminalHero";

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            matthew<span>.guimong</span>
          </div>
          <nav className="nav-links">
            <a href="#about">about</a>
            <a href="#experience">experience</a>
            <a href="#skills">skills</a>
            <a href="#projects">projects</a>
            <a href="#education">education</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </header>

      <section className="hero wrap">
        <div className="hero-grid">
          <TerminalHero />

          <div className="fetch">
            <div className="fetch-row">
              <div className="fetch-ascii">{`   /\\
  /  \\
 / /\\ \\
/ ____ \\
/_/  \\_\\`}</div>
              <div>
                <div className="fetch-name">
                  matthew<em>@</em>portfolio
                </div>
                <div className="fetch-rule"></div>
                <dl className="fetch-stats">
                  <dt>Role</dt>
                  <dd>QA Tester @ Kingdomly</dd>
                  <dt>Stack</dt>
                  <dd>Cypress, Playwright, k6</dd>
                  <dt>Also</dt>
                  <dd>Cloud &amp; Terraform intern</dd>
                  <dt>Base</dt>
                  <dd>San Pedro, Laguna, PH</dd>
                  <dt>Fuel</dt>
                  <dd>matcha, mostly</dd>
                </dl>
              </div>
            </div>
            <div className="swatches">
              <div className="swatch" style={{ background: "#3B4E1B" }}></div>
              <div className="swatch" style={{ background: "#6B7F4E" }}></div>
              <div className="swatch" style={{ background: "#849478" }}></div>
              <div className="swatch" style={{ background: "#9C6B3E" }}></div>
              <div className="swatch" style={{ background: "#E4C9A3" }}></div>
              <div className="swatch" style={{ background: "#FBFCF7" }}></div>
            </div>
          </div>
        </div>

        <p className="hero-tagline">
          I break Web3 apps for a living, then write the{" "}
          <span className="accent">Terraform</span> to host the next one — QA
          testing NFT marketplaces by day, provisioning AWS infrastructure on
          the side.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#experience">
            view experience
          </a>
          <a
            className="btn btn-ghost"
            href="mailto:matthew.guimong@gmail.com"
          >
            say hello
          </a>
        </div>
      </section>

      <section className="section wrap" id="about">
        <div className="eyebrow">cat about.txt</div>
        <h2 className="section-title">
          Ab<span className="wig">out</span>
        </h2>
        <div className="about-grid">
          <div className="about-photo">
            <div className="term-bar">
              <div className="term-dot r"></div>
              <div className="term-dot y"></div>
              <div className="term-dot g"></div>
              <div className="term-title">photo.jpg</div>
            </div>
            <Image
              src="/matthew.jpg"
              alt="Matthew Lawrence Guimong"
              width={400}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="about-text">
            <p>
              I&apos;m a <strong>QA Tester at Kingdomly</strong>, testing Web3
              applications, NFT marketplaces, and blockchain integrations —
              manual test cases, regression passes, and automated suites in{" "}
              <strong className="brown">Cypress</strong>,{" "}
              <strong className="brown">Playwright</strong>, and{" "}
              <strong className="brown">k6</strong>.
            </p>
            <p>
              Alongside QA, I&apos;m building out my cloud side through a
              Terraform internship at Stratpoint Technologies — moving from
              CloudFormation to modular, reusable Terraform on AWS.
            </p>
            <p>
              BS Computer Science, Mapúa University. Off the clock, I&apos;m
              usually tuning some part of my dev setup — this palette is
              basically my terminal theme, out in the wild.
            </p>
          </div>
          <div className="info-card">
            <div className="row">
              <span className="k">location</span>
              <span className="v">San Pedro, Laguna, PH</span>
            </div>
            <div className="row">
              <span className="k">email</span>
              <span className="v">matthew.guimong@gmail.com</span>
            </div>
            <div className="row">
              <span className="k">phone</span>
              <span className="v">(+63) 929-101-1011</span>
            </div>
            <div className="row">
              <span className="k">linkedin</span>
              <span className="v">/in/matthewguimong</span>
            </div>
            <div className="row">
              <span className="k">focus</span>
              <span className="v">QA + Cloud Engineering</span>
            </div>
            <div className="row">
              <span className="k">status</span>
              <span className="v">open to opportunities</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap" id="experience">
        <div className="eyebrow">git log --oneline</div>
        <h2 className="section-title">
          Exp<span className="wig">erience</span>
        </h2>
        <div className="timeline">
          <div className="tl-item current">
            <div className="tl-dot"></div>
            <div className="tl-head">
              <div className="tl-role">
                QA Tester <span className="co">@ Kingdomly</span>
              </div>
              <div className="tl-date">Nov 2024 — Present</div>
            </div>
            <div className="tl-place">Remote</div>
            <ul className="tl-list">
              <li>
                Designed and executed manual test cases for Web3
                applications, covering blockchain-based features end to end.
              </li>
              <li>
                Ran functional, UI/UX, and regression testing on NFT minting
                flows, marketplace transactions, and wallet integrations.
              </li>
              <li>
                Built Cypress and Playwright end-to-end suites to automate
                user flows and validate behavior across browsers.
              </li>
              <li>
                Wrote and maintained k6 load tests to evaluate API endpoint
                performance and reliability under traffic.
              </li>
            </ul>
            <div>
              <span className="tag">Cypress</span>
              <span className="tag">Playwright</span>
              <span className="tag">Synpress</span>
              <span className="tag">k6</span>
              <span className="tag">Web3</span>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-head">
              <div className="tl-role">
                Cloud Intern{" "}
                <span className="co">@ Stratpoint Technologies</span>
              </div>
              <div className="tl-date">Sep 2023 — Oct 2023</div>
            </div>
            <div className="tl-place">Mandaluyong, Metro Manila</div>
            <ul className="tl-list">
              <li>
                Applied the fundamentals of AWS and Terraform in a structured
                internship program.
              </li>
              <li>
                Set up efficient EC2 instance management using
                CloudFormation.
              </li>
            </ul>
            <div>
              <span className="tag">AWS</span>
              <span className="tag">CloudFormation</span>
              <span className="tag">Terraform</span>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-dot"></div>
            <div className="tl-head">
              <div className="tl-role">
                Intern <span className="co">@ Stratpoint Technologies</span>
              </div>
              <div className="tl-date">Jan 2019 — Mar 2019</div>
            </div>
            <div className="tl-place">Mandaluyong, Metro Manila</div>
            <ul className="tl-list">
              <li>Picked up the basic concepts of Git and Linux.</li>
              <li>
                Produced and enhanced Stratpoint&apos;s frontend website using
                Bulma and Bootstrap.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section wrap" id="skills">
        <div className="eyebrow">ls skills/</div>
        <h2 className="section-title">
          Sk<span className="wig">ills</span>
        </h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Quality Assurance</h3>
            <ul>
              <li>Manual &amp; Automated Testing</li>
              <li>Selenium</li>
              <li>Cypress / Synpress</li>
              <li>Playwright</li>
              <li>Regression &amp; Functional Testing</li>
              <li>k6 Load Testing</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Cloud Computing</h3>
            <ul>
              <li>AWS</li>
              <li>CloudFormation</li>
              <li>Terraform</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Web Development</h3>
            <ul>
              <li>HTML / JavaScript</li>
              <li>AngularJS / ReactJS</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Programming Languages</h3>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>C++</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Soft Skills</h3>
            <ul>
              <li>Problem Solving</li>
              <li>Creativity</li>
              <li>Adaptability</li>
              <li>Time Management</li>
            </ul>
          </div>
        </div>
        <div className="also-strip">
          <span className="label">$</span> also dabbles in: SQL/MySQL, Kotlin
          &amp; Android Studio, computer &amp; mobile repair
        </div>
      </section>

      <section className="section wrap" id="projects">
        <div className="eyebrow">ls projects/</div>
        <h2 className="section-title">
          Proj<span className="wig">ects</span>
        </h2>
        <div className="proj-grid">
          <div className="proj-card">
            <div className="proj-date">August 2022</div>
            <div className="proj-title">Memory Allocation Simulator</div>
            <div className="proj-desc">
              A Python-based tool for simulating and analyzing memory
              allocation operations in computing systems.
            </div>
            <div className="proj-role">Developer</div>
          </div>

          <div className="proj-card">
            <div className="proj-date">May 2022</div>
            <div className="proj-title">Cuevas Bakeshop Web App</div>
            <div className="proj-desc">
              A web application with chatbot integration to improve online
              ordering, product presentation, and customer engagement.
            </div>
            <div className="proj-role">Front-end Developer</div>
          </div>
        </div>
      </section>

      <section className="section wrap" id="education">
        <div className="eyebrow">cat education.md</div>
        <h2 className="section-title">
          Educ<span className="wig">ation</span>
        </h2>
        <div className="edu-cert-grid">
          <div>
            <div className="edu-block">
              <div className="edu-school">Mapúa University</div>
              <div className="edu-degree">BS Computer Science</div>
              <div className="edu-date">Aug 2019 — Dec 2023</div>
              <ul>
                <li>Dean&apos;s Lister, A.Y. 2019–2020</li>
                <li>
                  Thesis: Multiple Garbage Detection using Mask R-CNN in
                  TensorFlow for Household Waste Classification
                </li>
              </ul>
              <div className="edu-highlight">
                📄 published at CIIS 2023, Tokyo, Japan
              </div>
            </div>
          </div>

          <div className="edu-block">
            <div className="edu-school" style={{ marginBottom: "6px" }}>
              Certificates
            </div>
            <ul className="cert-list">
              <li className="cert-item">
                <div className="cert-name">Agile Software Development</div>
                <div className="cert-meta">
                  University of Minnesota (Coursera) · 2021
                </div>
              </li>
              <li className="cert-item">
                <div className="cert-name">
                  Service-Oriented Architecture
                </div>
                <div className="cert-meta">
                  University of Alberta (Coursera) · 2022
                </div>
              </li>
              <li className="cert-item">
                <div className="cert-name">
                  System Validation: Automata and Behavioural Equivalences
                </div>
                <div className="cert-meta">Coursera · 2022</div>
              </li>
              <li className="cert-item">
                <div className="cert-name">
                  Human-Centered Design: an Introduction
                </div>
                <div className="cert-meta">
                  UC San Diego (Coursera) · 2022
                </div>
              </li>
            </ul>
            <div className="cert-more">
              + 5 more on{" "}
              <a
                href="https://www.linkedin.com/in/matthewguimong"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-inner">
          <div className="eyebrow" style={{ color: "var(--sage-light)" }}>
            mailto matthew
          </div>
          <h2>Let&apos;s talk QA, cloud, or terminal themes.</h2>
          <p>
            Open to QA and cloud engineering opportunities, and always happy
            to compare notes on Terraform modules or terminal color schemes.
          </p>
          <div className="contact-links">
            <a href="mailto:matthew.guimong@gmail.com">
              matthew.guimong@gmail.com
            </a>
            <a href="tel:+639291011011">(+63) 929-101-1011</a>
            <a
              href="https://www.linkedin.com/in/matthewguimong"
              target="_blank"
              rel="noopener"
            >
              linkedin.com/in/matthewguimong
            </a>
          </div>
          <div className="foot-bottom">
            <span>Matthew Lawrence DC. Guimong</span>
            <span>San Pedro, Laguna, PH</span>
          </div>
        </div>
      </footer>
    </>
  );
}