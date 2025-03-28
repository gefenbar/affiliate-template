"use client";
import ReviewCard from "../components/ReviewCard";
import reviewsData from "../data/reviews.json";
import "./page.css"; // Use your existing CSS or adjust as needed

export default function ReviewsPage() {
  return (
    <div className="reviews-page">
      <h1>Product Reviews</h1>
      <div className="reviews-grid">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
