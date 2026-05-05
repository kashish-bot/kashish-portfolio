import "./Process.css";

function Process() {
  const processSteps = [
    {
      number: "01",
      icon: "/search.png",
      title: "Research",
      desc: "Understanding user needs, business goals, and the problem space.",
    },
    {
      number: "02",
      icon: "/analysis.png",
      title: "Analysis",
      desc: "Defining user flows, pain points, and design direction.",
    },
    {
      number: "03",
      icon: "/wireframe 1.png",
      title: "Wireframe",
      desc: "Structuring layouts and user journeys before visual design.",
    },
    {
      number: "04",
      icon: "/ui design.png",
      title: "UI Design",
      desc: "Designing clean, user-friendly, and visually balanced interfaces.",
    },
    {
      number: "05",
      icon: "/prototyping 1.png",
      title: "Prototype",
      desc: "Creating interactive flows to simulate the final experience.",
    },
    {
      number: "06",
      icon: "/testing.png",
      title: "Testing",
      desc: "Validating usability and identifying improvement areas.",
    },
    {
      number: "07",
      icon: "/feedback 1.png",
      title: "Feedback",
      desc: "Refining designs based on insights, reviews, and feedback.",
    },
    {
      number: "08",
      icon: "/hand pff.png",
      title: "Handoff",
      desc: "Delivering final designs with developer-ready assets.",
    },
  ];

  return (
    <section className="process-section" id="process">
      <div className="process-container">
        <p className="section-label">MY DESIGN PROCESS</p>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div className="process-card" key={index}>
              <span className="step-number">{step.number}</span>

              <div className="process-icon">
                <img src={step.icon} alt={step.title} />
              </div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;