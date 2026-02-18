import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import tempo14 from "../assets/vehicles/tempo14.webp";
import tempo12 from "../assets/vehicles/tempo12.webp";
import innova from "../assets/vehicles/innova.webp";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Tempo Traveller Rental in Tamil Nadu | PRIME XPRESS
        </title>
        <meta
          name="description"
          content="Book Tempo Traveller 12 & 14 seater, Innova and premium travel vehicles across Tamil Nadu. Ideal for family trips, temple tours and corporate travel."
        />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>

      {/* HERO */}
      <section>
        <div className="container center">
          <div className="badge">
            <span className="dot" />
            Available 24/7 for your travel needs
          </div>

          <h1>
            Tempo Traveller Rental Across Tamil Nadu
            <br />
            Travel Comfortably with PRIME XPRESS
          </h1>

          <p className="subtitle">
            Premium tempo traveller rentals, Innova, family trips, temple
            tours, pilgrimage and corporate travel services across South India.
          </p>

          <div className="cta-row">
            <Link to="/booking" className="btn primary">
              Book Now →
            </Link>

            <a href="tel:+918015743100" className="btn outline">
              Call Now
            </a>

            <a
              href="https://wa.me/918015743100"
              target="_blank"
              rel="noreferrer"
              className="btn outline"
            >
              Get Custom Quote
            </a>
          </div>

          <div className="stats">
            <div>
              <h2>14+</h2>
              <p>Years Experience</p>
            </div>
            <div>
              <h2>50K+</h2>
              <p>Happy Customers</p>
            </div>
            <div>
              <h2>100+</h2>
              <p>Vehicles</p>
            </div>
            <div>
              <h2>24/7</h2>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="light">
        <div className="container">
          <h2 className="center">Why Choose PRIME XPRESS</h2>
          <p className="center muted">
            Trusted travel partner across Tamil Nadu
          </p>

          <div className="grid-4">
            <div className="card">
              <div className="icon">🚐</div>
              <h3>Comfortable Vehicles</h3>
              <p>Well-maintained, clean and spacious vehicles.</p>
            </div>

            <div className="card">
              <div className="icon">👨‍✈️</div>
              <h3>Professional Drivers</h3>
              <p>Experienced and courteous drivers for safe travel.</p>
            </div>

            <div className="card highlight">
              <div className="icon">₹</div>
              <h3>Affordable Pricing</h3>
              <p>Best rates without compromising quality.</p>
            </div>

            <div className="card">
              <div className="icon">🎧</div>
              <h3>24/7 Support</h3>
              <p>We are always available for assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR FLEET */}
      <section>
        <div className="container">
          <h2 className="center">Our Fleet</h2>
          <p className="center muted">
            Choose from our range of well-maintained vehicles
          </p>

          <div className="grid-3">
            {/* VEHICLE 1 */}
            <div className="vehicle-card">
              <div className="vehicle-image">
                <img
                  src={tempo14}
                  alt="Tempo Traveller 14 Seater Rental in Tamil Nadu"
                />
                <span>Tempo Traveller 14-Seater</span>
              </div>

              <div className="vehicle-body">
                <div className="badges">
                  <span>👥 14 Seats</span>
                  <span>❄️ AC</span>
                  <span>👨‍✈️ Driver</span>
                </div>

                <p>
                  Ideal for large family trips, temple tours and long journeys.
                </p>

                <div className="actions">
                  <Link
                    to="/vehicles/tempo-traveller-14"
                    className="btn outline"
                  >
                    View Details
                  </Link>
                  <Link to="/booking" className="btn primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* VEHICLE 2 */}
            <div className="vehicle-card">
              <div className="vehicle-image">
                <img
                  src={tempo12}
                  alt="Tempo Traveller 12 Seater Rental in Tamil Nadu"
                />
                <span>Tempo Traveller 12-Seater</span>
              </div>

              <div className="vehicle-body">
                <div className="badges">
                  <span>👥 12 Seats</span>
                  <span>❄️ AC</span>
                  <span>👨‍✈️ Driver</span>
                </div>

                <p>
                  Comfortable and spacious for medium-sized groups.
                </p>

                <div className="actions">
                  <Link
                    to="/vehicles/tempo-traveller-12"
                    className="btn outline"
                  >
                    View Details
                  </Link>
                  <Link to="/booking" className="btn primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* VEHICLE 3 */}
            <div className="vehicle-card">
              <div className="vehicle-image">
                <img
                  src={innova}
                  alt="Innova Crysta Car Rental in Tamil Nadu"
                />
                <span>Innova / Crysta</span>
              </div>

              <div className="vehicle-body">
                <div className="badges">
                  <span>👥 7 Seats</span>
                  <span>❄️ AC</span>
                  <span>👨‍✈️ Driver</span>
                </div>

                <p>
                  Premium comfort for family and corporate travel.
                </p>

                <div className="actions">
                  <Link
                    to="/vehicles/innova-crysta"
                    className="btn outline"
                  >
                    View Details
                  </Link>
                  <Link to="/booking" className="btn primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <section>
        <div className="container center">
          <h2>Ready to Start Your Journey?</h2>
          <p className="muted">
            Book your ride today with PRIME XPRESS
          </p>

          <div className="cta-row">
            <Link to="/booking" className="btn primary">
              Book Now
            </Link>

            <a
              href="https://wa.me/918015743100"
              target="_blank"
              rel="noreferrer"
              className="btn outline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
