import { useParams, Link } from "react-router-dom";

import tempo14 from "../assets/vehicles/tempo14.webp";
import tempo12 from "../assets/vehicles/tempo12.webp";
import innova from "../assets/vehicles/innova.webp";

const VEHICLE_DATA = {
  "tempo-traveller-14": {
    name: "Tempo Traveller 14-Seater",
    image: tempo14,
    seats: "14 Seats",
    ac: "Air Conditioned",
    luggage: "Large Luggage Space",
    ideal: "Temple trips, group tours, long travels",
    description:
      "Our 14-seater Tempo Traveller is ideal for large families and groups looking for a comfortable and spacious travel experience across long distances.",
  },
  "tempo-traveller-12": {
    name: "Tempo Traveller 12-Seater",
    image: tempo12,
    seats: "12 Seats",
    ac: "Air Conditioned",
    luggage: "Medium Luggage Space",
    ideal: "Family trips, weekend getaways",
    description:
      "A perfect balance of comfort and capacity, suitable for medium-sized groups and family travel.",
  },
  "innova-crysta": {
    name: "Innova / Crysta",
    image: innova,
    seats: "7 Seats",
    ac: "Air Conditioned",
    luggage: "Premium Comfort",
    ideal: "Corporate travel, family trips",
    description:
      "Premium and smooth ride experience, ideal for business travel and family journeys.",
  },
};

const VehicleDetail = () => {
  const { slug } = useParams();
  const vehicle = VEHICLE_DATA[slug];

  if (!vehicle) {
    return (
      <section>
        <div className="container center">
          <h2>Vehicle Not Found</h2>
          <Link to="/vehicles" className="btn primary">
            Back to Vehicles
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section>
        <div className="container vehicle-detail">
          <div className="vehicle-detail-image">
            <img src={vehicle.image} alt={vehicle.name} />
          </div>

          <div className="vehicle-detail-info">
            <h1>{vehicle.name}</h1>
            <p className="subtitle">{vehicle.description}</p>

            <div className="badges">
              <span>👥 {vehicle.seats}</span>
              <span>❄️ {vehicle.ac}</span>
              <span>🧳 {vehicle.luggage}</span>
            </div>

            <p><strong>Ideal for:</strong> {vehicle.ideal}</p>

            <div className="actions">
              <Link to="/booking" className="btn primary">
                Book Now
              </Link>
              <Link to="/vehicles" className="btn outline">
                Back to Vehicles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="light">
        <div className="container">
          <h2 className="center">Perfect For</h2>

          <div className="grid-3">
            <div className="card center">Temple Visits</div>
            <div className="card center">Family Trips</div>
            <div className="card center">Corporate Travel</div>
          </div>
        </div>
      </section>

      {/* MINI GALLERY */}
      <section>
        <div className="container">
          <h2 className="center">Vehicle Gallery</h2>

          <div className="gallery-grid">
            <img src={vehicle.image} alt="Vehicle view 1" />
            <img src={vehicle.image} alt="Vehicle view 2" />
            <img src={vehicle.image} alt="Vehicle view 3" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="light">
        <div className="container">
          <h2 className="center">Frequently Asked Questions</h2>

          <div className="faq">
            <p><strong>Is driver included?</strong><br />Yes, all bookings include a professional driver.</p>
            <p><strong>Is AC available?</strong><br />Yes, fully air-conditioned vehicle.</p>
            <p><strong>Can I customize the route?</strong><br />Yes, route details can be discussed after booking.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section>
        <div className="container center">
          <h2>Ready to Book This Vehicle?</h2>
          <Link to="/booking" className="btn primary">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default VehicleDetail;
