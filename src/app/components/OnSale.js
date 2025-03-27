import './OnSale.css'
export default function OnSale() {
    const saleProducts = [
      {
        id: 1,
        name: "Electric Toothbrush Model X",
        image: "/images/example.png",
        discount: "20%",
        link: "/reviews/model-x"
      },
      {
        id: 2,
        name: "Electric Toothbrush Model Y",
        image: "/images/example.png",
        discount: "15%",
        link: "/reviews/model-y"
      },
      // Add more products as needed
    ];
  
    return (
      <section className="on-sale">
        <h2>On Sale!</h2>
        <div className="sale-grid">
          {saleProducts.map((product) => (
            <div key={product.id} className="sale-product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Discount: {product.discount}</p>
              <a href={product.link} className="cta-button">
                Shop Now
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  