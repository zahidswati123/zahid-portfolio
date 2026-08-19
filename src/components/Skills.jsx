import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaPython,
  FaRobot,
  FaBrain,
  FaGithub,
  FaPaperPlane,
  FaCloud,
  FaPlug,
  FaCode,
} from "react-icons/fa";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Tailwind CSS", icon: <FaCss3Alt /> },
      ],
    },
    {
      number: "02",
      title: "Backend Development",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <FaServer /> },
        { name: "REST APIs", icon: <FaPlug /> },
        { name: "MongoDB", icon: <FaDatabase /> },
      ],
    },
    {
      number: "03",
      title: "AI Development",
      icon: <FaRobot />,
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Generative AI", icon: <FaRobot /> },
        { name: "LLMs", icon: <FaBrain /> },
        { name: "OpenAI API", icon: <FaBrain /> },
        { name: "RAG", icon: <FaDatabase /> },
        { name: "AI Agents", icon: <FaRobot /> },
      ],
    },
    {
      number: "04",
      title: "Tools & Technologies",
      icon: <FaGithub />,
      skills: [
        { name: "Git & GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <FaPaperPlane /> },
        { name: "Vercel", icon: <FaCloud /> },
        { name: "API Integration", icon: <FaPlug /> },
      ],
    },
  ];

  return (
    <section className="skills-page" id="skills">
      <div className="container-fluid px-lg-5 px-3">

        <div className="skills-header">
          <div>
            <span className="section-number">02 / EXPERTISE</span>

            <h1 className="skills-title">
              Technical
              <br />
              Skills<span>.</span>
            </h1>
          </div>

          <p className="skills-header-text">
            Technologies I use to build modern web applications,
            backend systems and intelligent AI solutions.
          </p>
        </div>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-lg-6" key={group.title}>
              <div className="skill-group-card">

                <div className="skill-group-top">
                  <span className="skill-group-number">
                    {group.number}
                  </span>

                  <div className="skill-group-icon">
                    {group.icon}
                  </div>
                </div>

                <h2>{group.title}</h2>

                <div className="skills-list">
                  {group.skills.map((skill) => (
                    <div className="technology-pill" key={skill.name}>
                      <span className="technology-icon">
                        {skill.icon}
                      </span>

                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;