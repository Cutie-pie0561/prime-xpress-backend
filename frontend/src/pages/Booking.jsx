import { useEffect, useState } from "react";

const Booking = () => {
  const [vehicles, setVehicles] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [notes, setNotes] = useState("");

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);

  /* LOAD VEHICLES FROM ADMIN */
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/vehicles/")
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch(() => setVehicles([]));
  }, []);

  /* INDIA-ONLY LOCATION SEARCH */
  const searchLocation = async (query, setSuggestions) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&countrycodes=in&addressdetails=1&limit=5&q=${query}`
    );

    const data = await res.json();
    setSuggestions(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name,
      phone,
      pickup,
      drop,
      travel_date: travelDate,
      vehicle,
      notes,
    };

    fetch("http://127.0.0.1:8000/api/bookings/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(() => {
      alert("Booking request sent successfully!");
      setName("");
      setPhone("");
      setPickup("");
      setDrop("");
      setTravelDate("");
      setVehicle("");
      setNotes("");
    });
  };

  return (
    <section className="light">
      <div className="container">
        <h2 className="center">Book Your Journey</h2>
        <p className="center muted">
          Fill the details and our team will contact you shortly
        </p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Full Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10-digit mobile number"
            />
          </div>

          {/* PICKUP */}
          <div className="field">
            <label>Pickup Location</label>
            <input
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
                searchLocation(e.target.value, setPickupSuggestions);
              }}
              placeholder="Enter pickup location"
            />

            {pickupSuggestions.length > 0 && (
              <ul className="suggestions">
                {pickupSuggestions.map((place) => (
                  <li
                    key={place.place_id}
                    onClick={() => {
                      setPickup(place.display_name);
                      setPickupSuggestions([]);
                    }}
                  >
                    {place.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* DROP */}
          <div className="field">
            <label>Destination</label>
            <input
              value={drop}
              onChange={(e) => {
                setDrop(e.target.value);
                searchLocation(e.target.value, setDropSuggestions);
              }}
              placeholder="Enter destination"
            />

            {dropSuggestions.length > 0 && (
              <ul className="suggestions">
                {dropSuggestions.map((place) => (
                  <li
                    key={place.place_id}
                    onClick={() => {
                      setDrop(place.display_name);
                      setDropSuggestions([]);
                    }}
                  >
                    {place.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="field">
            <label>Travel Date</label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <label>Preferred Vehicle</label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              required
            >
              <option value="">Select vehicle</option>
              {vehicles.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Additional Notes</label>
            <textarea
              rows="4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any special request or message"
            />
          </div>

          <button className="btn primary">Submit Booking</button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
