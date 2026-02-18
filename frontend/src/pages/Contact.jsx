const Contact = () => {
  return (
    <>
      {/* HERO */}
      <section className="light">
        <div className="container center">
          <h1>Contact Us</h1>
          <p className="subtitle">
            Get in touch with PRIME XPRESS for bookings and enquiries
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="container contact-grid">
          
          {/* LEFT – INFO */}
          <div className="contact-info">
            <h2>Reach Us</h2>

            <p>
              Have questions or need immediate assistance?  
              Our team is available 24/7 to help you plan your journey.
            </p>

            <div className="contact-box">
              <p><strong>Phone</strong></p>
              <p>+91 XXXXX XXXXX</p>
            </div>

            <div className="contact-box">
              <p><strong>WhatsApp</strong></p>
              <p>+91 XXXXX XXXXX</p>
            </div>

            <div className="contact-box">
              <p><strong>Email</strong></p>
              <p>primexpress@email.com</p>
            </div>

            <div className="contact-box">
              <p><strong>Support Hours</strong></p>
              <p>24 / 7 Customer Support</p>
            </div>

            <div className="cta-row" style={{ justifyContent: "flex-start" }}>
              <button className="btn primary">Call Now</button>
              <button className="btn outline">WhatsApp Us</button>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="contact-form">
            <h2>Send an Enquiry</h2>

            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="Your phone number" />
              </div>

              <div className="form-group">
                <label>Email (optional)</label>
                <input type="email" placeholder="Your email" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your travel requirement"
                />
              </div>

              <button className="btn primary full">
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
