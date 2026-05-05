import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <p className="section-label">LET'S CONNECT</p>

          <h2>
            Let’s build something <br /> meaningful together
          </h2>

          <p className="contact-desc">
            Have a project in mind or just wanna say hi 👋🏻? <br />
            Feel free to reach out.
          </p>

          <div className="contact-socials">
            <a href="https://www.behance.net/kashishrajput6"><img src="/behance icon.png" /></a>
            <a href="https://www.linkedin.com/in/kashish-rajput-38b98b2a5/"><img src="/linkedIn icon.png" /></a>
            <a href="#"><img src="/gmail icon.png" /></a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your E-mail" />
            </div>

            <textarea placeholder="Your Message"></textarea>

            <button type="submit" className="send-btn">
              Send Message →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;