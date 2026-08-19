import {
  FaHeartbeat,
  FaRobot,
  FaBullhorn,
  FaDatabase,
  FaFileContract,
  FaIdCard,
  FaBalanceScale,
  FaChartLine,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      number: "01",
      icon: <FaHeartbeat />,
      title: "HabitAura",
      description:
        "A daily wellness and habit-tracking platform designed to help users build healthier routines, monitor daily habits, and improve their lifestyle through consistent progress.",
      technologies: ["React.js", "Web App", "Responsive UI"],
      live: "https://habittrackeradmin.vercel.app/",
    },
    {
      number: "02",
      icon: <FaRobot />,
      title: "DM Bot",
      description:
        "An AI-powered chat marketing automation platform that helps businesses streamline conversations, automate customer interactions, and maximize direct-message marketing.",
      technologies: ["AI", "Automation", "React.js", "APIs"],
      live: "https://dm-bot-five.vercel.app/",
    },
    {
      number: "03",
      icon: <FaBullhorn />,
      title: "Pulse Marketing",
      description:
        "A modern marketing platform built for a Vancouver-based sales-focused agency, helping businesses increase revenue through strategic marketing solutions and scalable digital campaigns.",
      technologies: ["React.js", "Marketing", "Responsive Design"],
      live: "https://pulse-marketing.vercel.app/",
    },
    {
      number: "04",
      icon: <FaDatabase />,
      title: "SQL Bot",
      description:
        "An interactive SQL learning platform that transforms database queries into an engaging quiz adventure with challenges, questions, and hands-on learning.",
      technologies: ["SQL", "Interactive Learning", "Web App"],
      live: "https://sql-bot-five.vercel.app/",
    },
    {
      number: "05",
      icon: <FaFileContract />,
      title: "Simpli RFP",
      description:
        "A smart platform designed to simplify complex government contracts and RFPs, making important contract information easier to understand, analyze, and navigate.",
      technologies: ["AI", "Data Analysis", "Web Platform"],
      live: "https://simply-project-ivory.vercel.app/",
    },
    {
      number: "06",
      icon: <FaIdCard />,
      title: "teKonecta",
      description:
        "A modern digital identity platform that brings social profiles, products, interests, and personal links together in one simple and customizable online presence.",
      technologies: ["React.js", "Digital Identity", "UI/UX"],
      live: "https://tekonecta-project.vercel.app/",
    },
    {
      number: "07",
      icon: <FaBalanceScale />,
      title: "Lawvocate",
      description:
        "An AI-powered legal and business support platform providing intelligent guidance across legal, startup, growth, and technology needs.",
      technologies: ["AI", "LLMs", "Legal Tech", "Chatbot"],
      live: "https://lawvocate.vercel.app/",
    },
    {
      number: "08",
      icon: <FaChartLine />,
      title: "The Root",
      description:
        "An intelligent marketing analytics platform that transforms campaign data into meaningful insights through advanced analysis, machine learning, and interactive visualizations.",
      technologies: ["AI", "Analytics", "Machine Learning", "Data"],
      live: "https://the-root-eight.vercel.app/",
    },
  ];

  return (
    <section className="projects-page" id="projects">
      <div className="container-fluid px-lg-5 px-3">

        <div className="projects-header">
          <div>
            <span className="section-number">03 / PROJECTS</span>

            <h1 className="projects-title">
              Selected
              <br />
              Work<span>.</span>
            </h1>
          </div>

          <p className="projects-header-text">
            A selection of real-world products and digital platforms I've
            worked on, combining modern web technologies, AI, automation,
            data, and thoughtful user experiences.
          </p>
        </div>

        <div className="row g-4 mt-3">
          {projects.map((project) => (
            <div className="col-lg-6" key={project.title}>
              <div className="project-card">

                <div className="project-card-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-icon">
                    {project.icon}
                  </div>
                </div>

                <div className="project-content">
                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Website
                    <FaExternalLinkAlt />
                  </a>
                </div>

              </div>
            </div>
          ))}

          {/* 100+ PROJECTS CARD */}
          <div className="col-12">
            <div className="project-success-card">

              <div className="success-card-icon">
                <FaCheckCircle />
              </div>

              <div className="success-card-content">
                <span>BEYOND THE SHOWCASE</span>

                <h2>
                  100<span>+</span>
                </h2>

                <h3>Successful Projects</h3>

                <p>
                  From modern web applications and full-stack platforms to
                  AI-powered solutions, APIs, automation, and digital products —
                  I've contributed to building and delivering 100+ successful
                  projects.
                </p>
              </div>

              <div className="success-code">
                &lt;/&gt;
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;