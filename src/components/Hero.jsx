import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="container-fluid px-lg-5 px-3">
        <div className="row min-vh-100 align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-8">
            <div className="hero-content">

              <div className="hero-label">
                <span className="hero-status-dot"></span>
                Available for Projects
              </div>

              <p className="hero-name">
                Hello, I&apos;m Zahid Aslam
              </p>

              <h1 className="hero-title">
                Software
                <br />
                Engineer<span>.</span>
              </h1>

              <div className="hero-roles">
                <span>Full Stack Developer</span>
                <span>AI Developer</span>
              </div>

              <p className="hero-description">
                I build modern full-stack applications and intelligent
                AI-powered digital products using scalable technologies,
                clean architecture and thoughtful user experiences.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/projects"
                  className="hero-btn-dark"
                >
                  View My Work
                  <span>↗</span>
                </Link>

                <a
                  href="https://wa.me/923305568951?text=Hi%20Yasir%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noreferrer"
                  className="hero-btn-light"
                >
                  Let&apos;s Talk
                </a>

              </div>

              {/* MINI STATS */}
              <div className="hero-stats">

                <div>
                  <strong>100+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>Full Stack</strong>
                  <span>Development</span>
                </div>

                <div>
                  <strong>AI</strong>
                  <span>Solutions</span>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-4">

            <div className="hero-code-card">

              <div className="code-window-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <small>developer.js</small>
              </div>

              <div className="code-content">

                <p>
                  <span className="code-blue">const</span>{" "}
                  yasir = {"{"}
                </p>

                <p className="code-indent">
                  name:{" "}
                  <span className="code-string">
                    &quot;Zahid Aslam &quot;
                  </span>,
                </p>

                <p className="code-indent">
                  role:{" "}
                  <span className="code-string">
                    &quot;Software Engineer&quot;
                  </span>,
                </p>

                <p className="code-indent">
                  stack: [
                </p>

                <p className="code-double-indent">
                  <span className="code-string">
                    &quot;Frontend&quot;
                  </span>,
                </p>

                <p className="code-double-indent">
                  <span className="code-string">
                    &quot;Backend&quot;
                  </span>,
                </p>

                <p className="code-double-indent">
                  <span className="code-string">
                    &quot;AI&quot;
                  </span>
                </p>

                <p className="code-indent">
                  ],
                </p>

                <p className="code-indent">
                  building:{" "}
                  <span className="code-string">
                    &quot;Future Products&quot;
                  </span>
                </p>

                <p>{"}"}</p>

                <p className="code-last-line">
                  <span className="code-blue">export default</span> yasir;
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;