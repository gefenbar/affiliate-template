"use client";
import "./RecommendedProducts.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function RecommendedProducts() {
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
    {
      name: "Electric Toothbrush 3",
      desc: "Short description...",
      imgSrc: "/images/example.png",
      imgAlt: "Product 2",
    },
  ];

  return (
    <section className="recommended-products">
      <div className="section-top">
      <h2>Recommended Products</h2>
      <button className="see-more-btn">See All</button>
      </div>
      {/* <div className="products-grid"> */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          speed={'800'}
          // scrollbar={{ draggable: true }}
          loop={true}
          style={{ width: "80%", maxWidth: "600px" }} // הגבלת רוחב הקרוסלה
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="product-card">
                <img src={item.imgSrc} alt={item.imgAlt} />
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <button>Learn More</button>
              </div>
              <br></br>
            </SwiperSlide>
          ))}
        </Swiper>
      {/* </div> */}
    </section>
  );
}
