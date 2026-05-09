import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id2of55",
        "template_amvr9d7",
        form.current,
        "QzTbxKiW7cJXwPFVV",
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        alert(error.text || "Something went wrong. Please try again.");
      });
  };

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
              <a href="https://www.behance.net/kashishrajput6" target="_blank">
                <img
                  src={`${import.meta.env.BASE_URL}behance icon.png`}
                  alt="Behance"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/kashish-rajput-38b98b2a5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${import.meta.env.BASE_URL}linkedIn icon.png`}
                  alt="LinkedIn"
                />
              </a>

              <a href="mailto:kashishr772@gmail.com">
                <img
                  src={`${import.meta.env.BASE_URL}gmail icon.png`}
                  alt="Gmail"
                />
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your E-mail"
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit" className="send-btn">
                Send Message
                <img
                  src={`${import.meta.env.BASE_URL}white-arrowlogo.png`}
                  alt=""
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
