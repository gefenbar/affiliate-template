"use client"
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
      </div>
      <div className="testimonials-list">
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          
          pagination={{ clickable: true }}
          speed={'800'}
          // scrollbar={{ draggable: true }}
          loop={true}
          style={{ width: "100%", maxWidth: "800px" }} // הגבלת רוחב הקרוסלה
        >
        {testimonials.map((item, index) => {
          return (
            <SwiperSlide key={index}>
            <div className="testimonial" >
            <span className="left-qoute">&#8220;</span>
            <p>{item.text}</p>
            <span className="right-qoute">&#8220;</span>
              <h4>{item.name}</h4>
            </div>
            </SwiperSlide>
          );
        })}
        </Swiper>
      </div>
    </section>
  );
}
