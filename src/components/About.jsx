function About() {
  const approach = [
    "Writing clean, maintainable, and scalable code",
    "Building responsive and accessible user interfaces",
    "Developing secure and efficient backend systems",
    "Creating and integrating REST APIs",
    "Working with databases and data-driven applications",
    "Integrating AI and modern automation technologies",
    "Following modern development practices and Git workflows",
    "Continuously learning new technologies and improving my skills",
  ];

  const focusItems = [
    {
      label: "ROLE",
      value: "Software Engineer & Full Stack Developer",
    },
    {
      label: "SPECIALIZATION",
      value: "Full Stack Web Development & AI Development",
    },
    {
      label: "FOCUS",
      value:
        "Modern Web Applications • AI-Powered Solutions • APIs • Responsive UI/UX",
    },
    {
      label: "TECHNOLOGIES",
      value:
        "React.js • JavaScript • Node.js • Express.js • Python • MongoDB • REST APIs • Git & GitHub • AI/LLMs",
    },
    {
      label: "BASED IN",
      value: "Pakistan",
    },
    {
      label: "CURRENT GOAL",
      value:
        "Building innovative software products that combine great design, powerful technology, and intelligent features to solve real-world problems.",
    },
  ];

  return (
    <section className="about-page" id="about">
      <div className="container-fluid px-lg-5 px-3">

        {/* HEADER */}
        <div className="row about-main-row">

          <div className="col-lg-5">
            <div className="about-heading-area">
              <span className="section-number">01 / ABOUT</span>

              <h1 className="about-title">
                About
                <br />
                Me<span>.</span>
              </h1>

              <p className="about-role">
                Software Engineer
                <br />
                <span>& Full Stack Developer</span>
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-content">

              <h2 className="about-intro-title">
                I'm Zahid Aslam, a Software Engineer & Full Stack Developer
              </h2>

              <p>
                I’m Zahid Aslam, a passionate{" "}
                <strong>Software Engineer and Full Stack Developer</strong>{" "}
                focused on building modern, responsive, scalable, and
                user-friendly digital experiences.
              </p>

              <p>
                I enjoy transforming ideas into real-world software solutions
                by combining clean code, thoughtful UI/UX, modern technologies,
                and efficient development practices.
              </p>

              <p>
                My expertise spans{" "}
                <strong>
                  frontend development, backend development, API integration,
                  database management, and AI-powered applications
                </strong>
                .
              </p>

              <p>
                I work with modern technologies to create complete web
                applications that are fast, reliable, maintainable, and
                designed to provide a smooth user experience across different
                devices.
              </p>

              <p>
                I’m particularly interested in{" "}
                <strong>Artificial Intelligence and Generative AI</strong>,
                exploring how intelligent technologies can be integrated into
                modern web applications to create smarter, more automated, and
                more useful digital products.
              </p>

              <p>
                From AI-powered features and chatbots to API-driven
                applications and intelligent automation, I enjoy turning
                emerging technologies into practical solutions.
              </p>

              <p className="about-highlight-text">
                I believe great software is more than just writing code. It’s
                about understanding a problem, designing the right solution,
                building it efficiently, and creating an experience that
                people genuinely enjoy using.
              </p>

            </div>
          </div>

        </div>

        {/* MY APPROACH */}
        <div className="about-approach-section">

          <span className="section-number">MY APPROACH</span>

          <div className="row g-3 mt-2">
            {approach.map((item, index) => (
              <div className="col-lg-6" key={item}>
                <div className="approach-card">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* WHAT I FOCUS ON */}
        <div className="about-focus-section">

          <div className="about-focus-heading">
            <span className="section-number">WHAT I FOCUS ON</span>

            <h2>
              Building solutions that
              <br />
              actually matter<span>.</span>
            </h2>
          </div>

          <div className="row g-3 mt-4">
            {focusItems.map((item) => (
              <div
                className={
                  item.label === "CURRENT GOAL"
                    ? "col-lg-12"
                    : "col-lg-6"
                }
                key={item.label}
              >
                <div className="focus-card">
                  <span>{item.label}</span>
                  <h3>{item.value}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;