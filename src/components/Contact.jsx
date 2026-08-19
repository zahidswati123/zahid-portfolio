import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page" id="contact">
      <div className="container-fluid px-lg-5 px-3">

        <div className="contact-header">
          <span className="section-number">05 / CONTACT</span>

          <h1 className="contact-title">
            Let&apos;s Build
            <br />
            Something<span>.</span>
          </h1>

          <p className="contact-intro">
            Have a project, product idea, AI solution, or collaboration in mind?
            Let&apos;s turn your idea into a modern and scalable digital product.
          </p>
        </div>

        <div className="row g-4 mt-4">

          {/* LEFT SIDE */}
          <div className="col-lg-5">
            <div className="contact-info-card">

              <span className="contact-small-title">
                GET IN TOUCH
              </span>

              <h2>
                Have an idea?
                <br />
                Let&apos;s talk.
              </h2>

              <p>
                I&apos;m open to software development projects, AI-powered
                applications, full-stack solutions and interesting
                collaborations.
              </p>

              <div className="contact-links">

                <a href="mailto:Yasirswati727@gmail.com">
                  <div className="contact-link-icon">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>zswati171@gmail.com</strong>
                  </div>

                  <FaArrowRight className="contact-arrow" />
                </a>

                <a
                  href="https://github.com/zahidswati123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-link-icon">
                    <FaGithub />
                  </div>

                  <div>
                    <span>GitHub</span>
                    <strong>zahidswati123</strong>
                  </div>

                  <FaArrowRight className="contact-arrow" />
                </a>

                <a
                  href="https://www.linkedin.com/in/zahid-aslam-8367b326a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-link-icon">
                    <FaLinkedinIn />
                  </div>

                  <div>
                    <span>LinkedIn</span>
                    <strong>Zahid Aslam</strong>
                  </div>

                  <FaArrowRight className="contact-arrow" />
                </a>

                <a
                  href="https://wa.me/923259564538"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-link-icon">
                    <FaWhatsapp />
                  </div>

                  <div>
                    <span>WhatsApp</span>
                    <strong>+92 3259564538</strong>
                  </div>

                  <FaArrowRight className="contact-arrow" />
                </a>

              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7">
            <form className="contact-form">

              <div className="row g-4">

                <div className="col-md-6">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="col-md-6">
                  <label>Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="col-12">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="Project collaboration"
                  />
                </div>

                <div className="col-12">
                  <label>Your Message</label>

                  <textarea
                    rows="7"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="submit">
                    Send Message
                    <FaArrowRight />
                  </button>
                </div>

              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;