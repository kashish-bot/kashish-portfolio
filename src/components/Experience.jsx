import "./Experience.css";

function Experience() {
  const experienceData = [
    {
      icon: "💼",
      title: "UI/UX Designer",
      text: "Currently working as a UI/UX Designer, creating intuitive digital experiences for web, mobile apps, admin dashboards, and ERP products.",
    },
    {
      icon: "👥",
      title: "Client Handling",
      text: "Managing client communication, understanding requirements, gathering feedback, and translating business needs into design solutions.",
    },
    {
      icon: "🧩",
      title: "Web, Mobile & ERP Product Design",
      text: "Designing responsive websites, mobile applications, admin panels, and ERP systems with strong focus on usability and clean user experience.",
    },
    {
      icon: "🤝",
      title: "Collaboration with Developers",
      text: "Working closely with developers to explain design decisions, clarify requirements, and ensure accurate implementation of UI screens.",
    },
    {
      icon: "🚀",
      title: "Project Execution",
      text: "From research and wireframes to final prototype and developer handoff.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="experience-left">
          <p className="section-label">EXPERIENCE</p>
          <h2>
            My Professional <br /> Journey
          </h2>
        </div>

        <div className="experience-right">
          {experienceData.map((item, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;