import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="tag">👋 Hello, I'm</p>

          <h1>
            Kashish Rani <br />
            <span className="highlight">UI/UX Designer |</span> <br />
            Frontend Learner
          </h1>

          <p className="desc">
            I design meaningful digital experiences that are user-centered,
            functional and visually appealing. Currently expanding my frontend
            skills to build seamless end-to-end digital solutions.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Resume</button>
            <button className="btn secondary">View Projects →</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src="/myProfile.png" alt="hero" />
        </div>

      </div>
    </section>
  );
}

export default Hero;