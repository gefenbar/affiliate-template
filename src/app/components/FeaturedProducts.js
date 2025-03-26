import "./FeaturedProducts.css";
export default function FeaturedProducts() {
  return (
      <section className="featured-products">
        <h2>Featured Products</h2>
        <br></br>
        <div className="products-grid">
          {/* כאן תכניסו רכיבים של מוצרים */}
          <div className="product-card">
          <img src="/images/example.png" alt="Product 2" width={'100px'} height={'100px'}/>
          <h3>Electric Toothbrush 1</h3>
            <p>Short description...</p>
            <br></br>
            <button>Learn More</button>
          </div>
          <div className="product-card">
            <img src="/images/example.png" alt="Product 2" width={'100px'} height={'100px'}/>
            <h3>Electric Toothbrush 2</h3>
            <p>Short description...</p>
            <br></br>
            <button>Learn More</button>
          </div>
          {/* המשך כרצונכם */}
        </div>
      </section>
  );
}
