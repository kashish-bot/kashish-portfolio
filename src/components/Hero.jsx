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
            Frontend Enthusiast
          </h1>

          <p className="desc">
            I design meaningful digital experiences that are user-centered,
            functional and visually appealing. Currently expanding my frontend
            skills to build seamless end-to-end digital solutions.
          </p>

          <div className="hero-buttons">
            <a href="/kashish-resume.pdf" download className="primary-btn">
              <img src={`${import.meta.env.BASE_URL}resumelogo.png`} alt="" />
              Resume
            </a>

            <a href="#projects" className="secondary-btn">
              View Projects
              <img src={`${import.meta.env.BASE_URL}arrowlogo.png`} alt="" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src={`${import.meta.env.BASE_URL}myProfile.png`} alt="hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
