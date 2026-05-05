import "./Skills.css";

function Skills() {
  const skills = [
    "UI Design",
    "UX Research",
    "Wireframing",
    "Prototyping",
    "System Design",
    "Responsive Design",
    "Frontend Basics",
    "CSS",
    "HTML",
    "JavaScript",
    "React",
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <p className="section-label">SKILLS</p>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <span className="skill-chip" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;