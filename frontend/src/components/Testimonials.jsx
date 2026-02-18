import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/testimonials/")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="light">
      <div className="container">
        <h2 className="center">What Our Customers Say</h2>
        <p className="center muted">
          Real experiences from travelers across India
        </p>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="stars">
                {"★".repeat(t.stars)}
                {"☆".repeat(5 - t.stars)}
              </div>
              <p>{t.message}</p>
              <strong>{t.name}</strong>
              <span>{t.city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
