import './Testimonials.css'
export default function Testimonials() {
    return (
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-list">
          <div className="testimonial">
            <p>"This electric toothbrush changed my life!"</p>
            <h4>John Doe</h4>
          </div>
          <div className="testimonial">
            <p>"Highly recommend for a fresh and clean smile."</p>
            <h4>Jane Smith</h4>
          </div>
          {/* עוד המלצות */}
        </div>
      </section>
    );
  }
  