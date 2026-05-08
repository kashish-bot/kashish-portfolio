import "./Projects.css";

function Projects() {
  const officeProjects = [
    {
      title: "Barber Syndicate",
      image: `${import.meta.env.BASE_URL}barber syndicate.png`,
      desc: "A premium website design for a salon and grooming brand, focused on clean layout and strong visual presentation.",
      tags: ["Web", "Wholesale"],
      link: "https://git-branch-m-main.vercel.app/",
    },
    {
      title: "Debt Relief India",
      image: `${import.meta.env.BASE_URL}DRI.png`,
      desc: "A debt-relief web application design with intuitive screens, clear flow, and user-friendly experience.",
      tags: ["App", "Fintech"],
      link: "https://play.google.com/store/apps/details?id=com.deveshqurilo.dri&pcampaignid=web_share",
    },
    {
      title: "Bharat Bhakti Sangam",
      image: `${import.meta.env.BASE_URL}bharat bhakti sangam.png`,
      desc: "A devotional event platform design for ticket booking, event details, and smooth user registration.",
      tags: ["Web", "Event Management"],
      link: "https://bharatbhaktisangam.com/",
    },
  ];
  const personalProjects = [
    {
      title: "StudyBuddy",
      image: `${import.meta.env.BASE_URL}study buddy.png`,
      desc: "A productivity app concept that combines notes, journal, to-dos, pomodoro and an AI study assistant.",
      link: "https://www.behance.net/gallery/241311561/StudyBuddy-Productivity-App-for-Students",
    },
    {
      title: "Feast Hub",
      image: `${import.meta.env.BASE_URL}feast hub.png`,
      desc: "A food delivery and dine-in booking app designed for a smooth and simple ordering experience.",
      link: "https://www.behance.net/gallery/193269423/FEAST-HUB",
    },
    {
      title: "Facial AI",
      image: `${import.meta.env.BASE_URL}facial ai.png`,
      desc: "An AI-powered face analysis app that provides personalized improvement insights and training plans.",
      link: "https://www.behance.net/gallery/248097851/Facial-AI",
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
                  Open
                  <img
                    src={`${import.meta.env.BASE_URL}white-arrowlogo.png`}
                    alt="arrow"
                  />
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
                  Case Study
                  <img
                    src={`${import.meta.env.BASE_URL}white-arrowlogo.png`}
                    alt="arrow"
                  />
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
