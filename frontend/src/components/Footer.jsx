import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* COMPANY INFO */}
        <div>
          <h3>PRIME XPRESS</h3>
          <p>
            PRIME XPRESS is a trusted travel service provider offering tempo
            traveller, Innova, and premium vehicle rentals for family trips,
            temple visits, corporate travel, and long journeys across India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/booking">Booking</Link></li>
          </ul>
        </div>

        {/* OUR FLEET */}
        <div>
          <h4>Our Fleet</h4>
          <ul>
            <li><Link to="/vehicles/tempo-traveller-14">Tempo Traveller 14</Link></li>
            <li><Link to="/vehicles/tempo-traveller-12">Tempo Traveller 12</Link></li>
            <li><Link to="/vehicles/innova-crysta">Innova / Crysta</Link></li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h4>Contact Us</h4>
          <p>
            📞 <a href="tel:+91918015743100">+91 918015743100</a>
          </p>
          <p>
            📧 <a href="mailto:primexpress.sri@gmail.com">primexpress.sri@gmail.com</a>
          </p>
          <p>🕒 24 / 7 Customer Support</p>

          {/* REAL ICONS */}
          <div className="footer-social">
            <a
              href="https://www.instagram.com/primexpress.sri01?igsh=MTRxMWpscmVtcjdndg=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/918015743100"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:primexpress.sri@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="footer-cta">
            <Link to="/booking" className="btn primary">
              Book Now
            </Link>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} PRIME XPRESS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
