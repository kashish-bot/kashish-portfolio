import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg">
        <div className="blob blob-top"></div>
        <div className="blob blob-bottom"></div>

        <div className="contact-content">
          <div className="contact-left">
            <p className="section-label">LET’S CONNECT</p>

            <h2>
              Let’s build something <br />
              meaningful together
            </h2>

            <p className="contact-desc">
              Have a project in mind or just wanna say hi 👋? <br />
              Feel free to reach out.
            </p>

            <div className="contact-socials">
              <a href="#">
                <img src="/behance icon.png" alt="Behance" />
              </a>
              <a href="#">
                <img src="/linkedIn icon.png" alt="LinkedIn" />
              </a>
              <a href="mailto:youremail@gmail.com">
                <img src="/gmail icon.png" alt="Gmail" />
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your E-mail" />
              </div>

              <textarea placeholder="Your Message"></textarea>

              <button type="submit" className="send-btn">
                Send Message
                <img src="/white-arrowlogo.png" alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
