import "./FeaturedProducts.css";
export default function FeaturedProducts() {
  const products = [
    {
      name: "Electric Toothbrush 1",
      desc: "Short description...",
      imgSrc: "/images/example.png",
      imgAlt: "Product 1",
    },
    {
      name: "Electric Toothbrush 2",
      desc: "Short description...",
      imgSrc: "/images/example.png",
      imgAlt: "Product 2",
    },
  ];
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((item, index) => {
          return (
            <div className="product-card" key={index}>
              <img src={item.imgSrc} alt={item.imgAlt} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <br></br>
              <button>Learn More</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
