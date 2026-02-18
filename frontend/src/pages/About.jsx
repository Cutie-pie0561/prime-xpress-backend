const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="light">
        <div className="container center">
          <h1>About PRIME XPRESS</h1>
          <p className="subtitle">
            Reliable, comfortable, and professional travel solutions across India
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="container about-grid">
          <div>
            <h2>Who We Are</h2>
            <p>
              PRIME XPRESS is a trusted travel service provider offering tempo
              traveller, Innova, and premium vehicle rentals for families,
              pilgrims, corporate teams, and tour groups across India.
            </p>
            <p>
              With years of experience in the travel industry, we focus on safety,
              comfort, punctuality, and customer satisfaction in every journey.
            </p>
          </div>

          <div>
            <h2>Our Mission</h2>
            <p>
              To deliver stress-free and comfortable travel experiences by
              providing well-maintained vehicles, professional drivers, and
              reliable customer support.
            </p>

            <h2 style={{ marginTop: "24px" }}>Our Vision</h2>
            <p>
              To become one of India’s most trusted vehicle rental brands for
              group and family travel.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="light">
        <div className="container">
          <h2 className="center">Why Choose PRIME XPRESS</h2>

          <div className="grid-3">
            <div className="card">
              <h3>Experienced Team</h3>
              <p>
                Our drivers and support team have extensive experience handling
                long-distance and group travel.
              </p>
            </div>

            <div className="card">
              <h3>Well-Maintained Fleet</h3>
              <p>
                All vehicles are regularly serviced, clean, and equipped for
                comfortable journeys.
              </p>
            </div>

            <div className="card">
              <h3>Customer-First Approach</h3>
              <p>
                We prioritize your comfort, safety, and convenience from booking
                to drop-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container center">
          <h2>Travel with Confidence</h2>
          <p className="muted">
            Experience comfortable and reliable journeys with PRIME XPRESS
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
