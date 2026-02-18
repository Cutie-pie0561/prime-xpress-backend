import { useEffect, useState } from "react";

const Gallery = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/gallery/")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="light">
        <div className="container center">
          <h1>Gallery</h1>
          <p className="subtitle">
            Moments from our journeys across India
          </p>
        </div>
      </section>

      {/* GALLERY CONTENT */}
      {categories.map((cat) => (
        <section key={cat.id}>
          <div className="container">
            <h2 className="center">{cat.name}</h2>

            <div className="gallery-grid">
              {cat.images.map((img) => (
                <div className="gallery-card" key={img.id}>
                  <img src={img.image} alt={img.caption || cat.name} />
                  {img.caption && (
                    <div className="gallery-caption">
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Gallery;
