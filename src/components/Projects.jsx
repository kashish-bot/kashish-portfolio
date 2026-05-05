import "./Projects.css";

function Projects() {
  const officeProjects = [
    {
      title: "Barber Syndicate",
      image: "/barber syndicate.png",
      desc: "A premium website design for a salon and grooming brand, focused on clean layout and strong visual presentation.",
      tags: ["Web", "UI/UX"],
      link: "#",
    },
    {
      title: "Debt Relief India",
      image: "/DRI.png",
      desc: "A debt-relief web application design with intuitive screens, clear flow, and user-friendly experience.",
      tags: ["App", "Fintech"],
      link: "#",
    },
    {
      title: "Bharat Bhakti Sangam",
      image: "/bharat bhakti sangam.png",
      desc: "A devotional event platform design for ticket booking, event details, and smooth user registration.",
      tags: ["Web", "Event Management"],
      link: "https://bharatbhaktisangam.com/",
    },
  ];
  const personalProjects = [
  {
    title: "StudyBuddy",
    image: "/study buddy.png",
    desc: "A productivity app concept that combines notes, journal, to-dos, pomodoro and an AI study assistant.",
    link: "#",
  },
  {
    title: "Feast Hub",
    image: "/feast hub.png",
    desc: "A food delivery and dine-in booking app designed for a smooth and simple ordering experience.",
    link: "#",
  },
  {
    title: "Facial AI",
    image: "/facial ai.png",
    desc: "An AI-powered face analysis app that provides personalized improvement insights and training plans.",
    link: "#",
  },
];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <p className="section-label">OFFICE PROJECTS</p>

        <div className="office-project-grid">
          {officeProjects.map((project, index) => (
            <div className="office-card" key={index}>
              <div className={`image-frame frame-${index}`}>
                <img src={project.image} alt={project.title} />
              </div>

              <div className="office-card-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <a href={project.link} target="_blank" className="open-btn">
                  Open →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="personal-project-container">
      <p className="section-label personal-label">PERSONAL PROJECTS</p>
      <div className="personal-project-grid">
        {personalProjects.map((project, index) => (
          <div className="personal-card" key={index}>
             <div className="personal-image-frame">
             <img src={project.image} alt={project.title} />
             </div>

             <div className="personal-card-content">
             <h3>{project.title}</h3>
             <p>{project.desc}</p>

             <a href={project.link} target="_blank" className="case-btn">
                 Case Study ↗
             </a>
             </div>
          </div>
        ))}
      </div>
    </div>
    </section>

    
  );
}

export default Projects;