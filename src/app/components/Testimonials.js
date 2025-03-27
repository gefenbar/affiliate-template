import "./Testimonials.css";
export default function Testimonials() {
  const testimonials = [
    { text: "This electric toothbrush changed my life!", name: "John Doe" },
    {
      text: "Highly recommend for a fresh and clean smile.",
      name: "Jane Smith",
    },
  ];
  return (
    <section className="testimonials">
      <div className="section-top">
        <h2>What Our Customers Say</h2>

        <button className="see-more-btn">See All</button>
      </div>
      <div className="testimonials-list">
        {testimonials.map((item, index) => {
          return (
            <div className="testimonial" key={index}>
              <p>{item.text}</p>
              <h4>{item.name}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
