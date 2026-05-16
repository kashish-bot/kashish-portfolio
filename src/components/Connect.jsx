import "./Connect.css";

function Connect() {
  const socials = [
    {
      name: "Behance",
      icon: `${import.meta.env.BASE_URL}behance icon.png`,
      link: "https://www.behance.net/kashishrajput6",
    },
    {
      name: "LinkedIn",
      icon: `${import.meta.env.BASE_URL}linkedIn icon.png`,
      link: "https://www.linkedin.com/in/kashish-rani-38b98b2a5/",
    },
    {
      name: "Gmail",
      icon: `${import.meta.env.BASE_URL}gmail icon.png`,
      link: "kashishr772@gmail.com",
    },
  ];

  const tools = [
    { name: "Figma", icon: `${import.meta.env.BASE_URL}figma icon.png` },
    {
      name: "Photoshop",
      icon: `${import.meta.env.BASE_URL}photoshop icon.png`,
    },
    {
      name: "Illustrator",
      icon: `${import.meta.env.BASE_URL}illustrator icon.png`,
    },
    { name: "VS Code", icon: `${import.meta.env.BASE_URL}vs code icon.png` },
    { name: "HTML", icon: `${import.meta.env.BASE_URL}html icon.png` },
    { name: "CSS", icon: `${import.meta.env.BASE_URL}css icon.png` },
    { name: "JS", icon: `${import.meta.env.BASE_URL}js icon.png` },
    { name: "React", icon: `${import.meta.env.BASE_URL}react icon.png` },
  ];

  return (
    <section className="connect">
      <div className="connect-container">
        {/* LEFT */}
        <div className="connect-left">
          <p className="section-label">LET'S CONNECT</p>

          <div className="socials">
            {socials.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                key={index}
              >
                <img src={item.icon} alt={item.name} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="connect-right">
          <p className="section-label">TOOLS I USE</p>

          <div className="tools">
            {tools.map((tool, index) => (
              <div className="tool" key={index}>
                <img src={tool.icon} alt={tool.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
