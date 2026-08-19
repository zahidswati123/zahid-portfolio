import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaRobot,
  FaPlug,
  FaDatabase,
  FaCogs,
  FaCloudUploadAlt,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      number: "01",
      icon: <FaLaptopCode />,
      title: "Full Stack Web Development",
      description:
        "Complete modern web applications built from frontend to backend with scalable architecture and responsive user experiences.",
    },
    {
      number: "02",
      icon: <FaReact />,
      title: "Frontend Development",
      description:
        "Responsive and interactive interfaces using React.js, JavaScript and modern UI development practices.",
    },
    {
      number: "03",
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Secure and scalable backend systems using Node.js, Express.js, APIs and database-driven architecture.",
    },
    {
      number: "04",
      icon: <FaRobot />,
      title: "AI & Generative AI",
      description:
        "AI-powered applications using LLMs, OpenAI APIs, RAG, intelligent assistants and modern AI technologies.",
    },
    {
      number: "05",
      icon: <FaPlug />,
      title: "API Development & Integration",
      description:
        "REST API development and smooth integration of third-party services, platforms and external systems.",
    },
    {
      number: "06",
      icon: <FaDatabase />,
      title: "Database Development",
      description:
        "Structured and scalable database solutions for data-driven applications using modern database technologies.",
    },
    {
      number: "07",
      icon: <FaCogs />,
      title: "Automation Solutions",
      description:
        "Smart workflows and automated systems designed to reduce repetitive tasks and improve digital processes.",
    },
    {
      number: "08",
      icon: <FaCloudUploadAlt />,
      title: "Deployment & Optimization",
      description:
        "Application deployment, performance optimization and production-ready setup for fast and reliable software.",
    },
  ];

  return (
    <section className="services-page" id="services">
      <div className="container-fluid px-lg-5 px-3">

        <div className="services-header">
          <div>
            <span className="section-number">04 / SERVICES</span>

            <h1 className="services-title">
              What I
              <br />
              Do<span>.</span>
            </h1>
          </div>

          <p className="services-header-text">
            From modern web applications to intelligent AI solutions,
            I build scalable digital products that combine technology,
            functionality and thoughtful user experience.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-6" key={service.title}>
              <div className="service-card">

                <div className="service-top">
                  <span>{service.number}</span>

                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>

                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <div className="service-arrow">
                  ↗
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;