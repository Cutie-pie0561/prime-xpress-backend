import { Link } from "react-router-dom";

import tempo14 from "../assets/vehicles/tempo14.webp";
import tempo12 from "../assets/vehicles/tempo12.webp";
import innova from "../assets/vehicles/innova.webp";

const Vehicles = () => {
  return (
    <section>
      <div className="container">
        <h2 className="center">Our Vehicles</h2>
        <p className="center muted">
          Choose the perfect vehicle for your journey
        </p>

        <div className="grid-3">
          {/* TEMPO 14 */}
          <div className="vehicle-card">
            <div className="vehicle-image">
              <img src={tempo14} alt="Tempo Traveller 14 Seater" />
              <span>Tempo Traveller 14-Seater</span>
            </div>
            <div className="vehicle-body">
              <div className="badges">
                <span>👥 14 Seats</span>
                <span>❄️ AC</span>
                <span>🧳 Luggage</span>
              </div>
              <p>
                Ideal for large families, temple trips, and group tours with
                maximum comfort.
              </p>
              <div className="actions">
                <Link to="/vehicles/tempo-traveller-14" className="btn outline">
                  View Details
                </Link>
                <Link to="/booking" className="btn primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* TEMPO 12 */}
          <div className="vehicle-card">
            <div className="vehicle-image">
              <img src={tempo12} alt="Tempo Traveller 12 Seater" />
              <span>Tempo Traveller 12-Seater</span>
            </div>
            <div className="vehicle-body">
              <div className="badges">
                <span>👥 12 Seats</span>
                <span>❄️ AC</span>
                <span>🧳 Luggage</span>
              </div>
              <p>
                Perfect balance of comfort and capacity for medium-sized groups.
              </p>
              <div className="actions">
                <Link to="/vehicles/tempo-traveller-12" className="btn outline">
                  View Details
                </Link>
                <Link to="/booking" className="btn primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* INNOVA */}
          <div className="vehicle-card">
            <div className="vehicle-image">
              <img src={innova} alt="Innova Crysta" />
              <span>Innova / Crysta</span>
            </div>
            <div className="vehicle-body">
              <div className="badges">
                <span>👥 7 Seats</span>
                <span>❄️ AC</span>
                <span>💺 Premium</span>
              </div>
              <p>
                Premium and comfortable choice for family trips and corporate
                travel.
              </p>
              <div className="actions">
                <Link to="/vehicles/innova-crysta" className="btn outline">
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
  );
};

export default Vehicles;
